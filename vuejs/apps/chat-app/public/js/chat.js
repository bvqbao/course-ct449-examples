const app = Vue.createApp({
    data() {
        return {
            socket: null,
            room: "",
            users: [],
            messages: [],
            newMessage: null,
            sending: false,
        };
    },

    methods: {
        autoscroll() {
            const $messages = this.$refs.divMessages;
            $messages.scrollTop = $messages.scrollHeight;
        },

        sendLocation() {
            if (!navigator.geolocation) {
                return alert("Geolocation is not supported by your browser.");
            }

            this.sending = true;
            navigator.geolocation.getCurrentPosition((position) => {
                this.socket.emit(
                    "sendLocation",
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    () => {
                        this.sending = false;
                        console.log("Location shared!");
                    }
                );
            });
        },

        sendMessage() {
            this.sending = true;
            this.socket.emit("sendMessage", this.newMessage, (error) => {
                this.sending = false;

                if (error) {
                    return console.log(error);
                }

                console.log("The message is delivered!");
            });
        },

        setupWebSocket() {
            this.socket = io();
            this.socket.on("message", (message) => {
                const msg = {
                    isLocationMessage: false,
                    username: message.username,
                    content: message.text,
                    createdAt: moment(message.createdAt).format("h:mm a"),
                };
                console.log(msg);
                this.messages.push(msg);

				// Wait for the DOMs get updated
                this.$nextTick(() => {
                    this.autoscroll();
                });
            });

            this.socket.on("locationMessage", (message) => {
                const msg = {
                    isLocationMessage: true,
                    username: message.username,
                    content: message.url,
                    createdAt: moment(message.createdAt).format("h:mm a"),
                };
                console.log(msg);
                this.messages.push(msg);

				// Wait for the DOMs get updated
                this.$nextTick(() => {
                    this.autoscroll();
                });
            });

            this.socket.on("roomData", ({ room, users }) => {
                this.room = room;
                this.users = users;
            });

            const { username, room } = Qs.parse(location.search, {
                ignoreQueryPrefix: true,
            });
            this.socket.emit("join", { username, room }, (error) => {
                if (error) {
                    alert(error);
                    location.href = "/";
                }
            });
        },
    },

    mounted() {
        this.setupWebSocket();
    },
});

app.component("sidebar", {
    template: `
	<div class="chat__sidebar">
		<h2 class="room-title">{{room}}</h2>
		<h3 class="list-title">Users</h3>
		<ul class="users">
				<li v-for="user in users"
					:key="user.id">{{user.username}}</li>
		</ul>
	</div>
	`,
    props: ["room", "users"],
});

app.component("chat-message", {
    template: `
	<div class="message">
		<p>
			<span class="message__name">{{username}}</span>
			<span class="message__meta">{{createdAt}}</span>
		</p>
		<p v-if="isUrl"><a :href="content" target="_blank">My current location</a></p>
		<p v-else>{{content}}</p>
	</div>
	`,
    props: {
        isUrl: Boolean,
        username: String,
        content: String,
        createdAt: String,
    },
});

app.mount("#app");
