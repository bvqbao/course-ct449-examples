const MongoDB = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoDB.MongoClient(uri);

async function updateUndefined(collection) {
	const document = {
		field1: "field1",
		field2: "field2",
	};
	const result = await collection.findOneAndUpdate(
		document,
		{ $set: { field3: undefined } },
		{ returnDocument: "after", upsert: true }
	);
	return result.value;
}

function aggregateContactWithUser(contactCollection) {
	return contactCollection.aggregate([
		{
			$lookup: {
				from: "users",
				localField: "ownerId",
				foreignField: "_id",
				as: "owner",
			},
		},
		{
			$unwind: "$owner",
		},
		// {
		// 	$replaceWith: {
		// 		// Merge the root document with a new object called "owner" created
		// 		// 	from the first element in the "joinedOwner" array.
		// 		$mergeObjects: [
		//			// $$<variable>, ROOT: the root (top-level) document
		// 			"$$ROOT",
		// 			{ owner: { $arrayElemAt: ["$joinedOwner", 0] } },
		// 		],
		// 	},
		// },
		// {
		// 	$project: {
		// 		ownerId: 0,
		// 		"owner.password": 0,
		// 		joinedOwner: 0,
		// 	},
		// },
		{
			$project: {
				ownerId: 0,
				"owner._id": 0,
				"owner.password": 0,
			},
		},
	]);
}

async function run() {
	try {
		await client.connect();
		const contactbook = client.db("contactbook");
		const contacts = contactbook.collection("contacts");

		const aggCursor = aggregateContactWithUser(contacts);

		for await (const doc of aggCursor) {
			console.log(doc);
		}

		// const collection = client.db("test").collection("collection");
		// const result = await updateUndefined(collection);
		// console.log(result);
	} finally {
		await client.close();
	}
}

run().catch(console.dir);
