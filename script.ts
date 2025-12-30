import {prisma} from "./lib/prisma";

async function main(){
    // await prisma.userPreferences.deleteMany();
    // await prisma.user.deleteMany();
    
    // Create one 

    // const user = await prisma.user.create({
    //     data : {
    //         email : "shubham@gmail.com",
    //         age : 22,
    //         name : "Shubham",
    //         userPreferences : {
    //             create : {
    //                 emailUpdates : true
    //             }
    //         }
    //     },
    //     select : {
    //         name : true,
    //         userPreferences : {
    //             select : {
    //                 emailUpdates : true
    //             }
    //         }
    //     }
    //     // include : {
    //     //     userPreferences : true
    //     // }
    // })

    // Create Many

    // const users = await prisma.user.createMany({
    //     data : [
    //         {
    //             email : "abc@gmail.com",
    //             age : 25,
    //             name : "ABC",
    //         },
    //         {
    //             email : "qqq@gmail.com",
    //             age : 30,
    //             name : "QQQ",
    //         }
    //     ]
    // })
  
    // console.log(users);
    // find unique -> annoted with unique key in schema

    // const user = await prisma.user.findUnique({
    //     where : {
    //         email : "shubham@gmail.com"
    //     }
    // })
    // console.log(user);


    // simple find without uniqe
    // const user = await prisma.user.findFirst({
    //     where : {
    //         age : 22
    //     },
    //     select : {
    //         email : true,
    //         userPreferences : true
    //     }
    // })
    // console.log(user);

    // find many
    // const users = await prisma.user.findMany({
    //     take : 2, // pagination,
    //     skip : 1,
    //     orderBy : {
    //         age : 'desc'
    //     },
    //     where: {
    //         name :{
    //             not : 'ALALA',
    //             notIn : ['Shubham']
    //         },
    //         age : {
    //             lte : 100
    //         },
    //         email : {
    //             contains : '@gmail.com',
    //             endsWith : 'com',
    //             startsWith : 'a'
    //         }
    //     },
    // })
    // console.log(users);


    // update
    const user = await prisma.user.update({
        where : {
            email : "shubham101@gmail.com"
        },
        data :{
            email : "shubham101@gmail.com",
            age : {
                increment : 1
            }
        }
    })
}


main()
.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})