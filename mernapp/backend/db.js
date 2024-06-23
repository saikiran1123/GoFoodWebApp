const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://gofood:Saikiran@cluster0.kpxc1wh.mongodb.net/gofoodMERN?retryWrites=true&w=majority&appName=Cluster0';
// const mongoURI = 'mongodb://gofood:Saikiran@ac-8cpax7f-shard-00-00.kpxc1wh.mongodb.net:27017,ac-8cpax7f-shard-00-01.kpxc1wh.mongodb.net:27017,ac-8cpax7f-shard-00-02.kpxc1wh.mongodb.net:27017/gofoodMERN?ssl=true&replicaSet=atlas-x3zyt7-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {

    try {
        const connect = await mongoose.connect(mongoURI,);
        if (connect) {
            console.log("Connected");
            const db = mongoose.connection.db;

            const fetched_data = db.collection("food_items");
            const data = await fetched_data.find({}).toArray();
            const foodCategory =db.collection("foodCategory");
            const catData = await foodCategory.find({}).toArray()
            global.food_items = data;
            global.foodCategory=catData;


        }
    }
    catch (error) {
        console.log('Error while connecting', error.message);
    }

}

module.exports = mongoDB;