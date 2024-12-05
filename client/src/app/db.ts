"use client";
// Open (or create) the database
let loader: Promise<IDBDatabase> = Promise.reject("No IndexedDB available");
if (typeof window !== "undefined") {
    const request = window?.indexedDB?.open("800_171_r3", 1);

    loader = new Promise((resolve, reject) => {
        request.onerror = (event) => {
            console.error("Why didn't you allow my web app to use IndexedDB?!");
            reject(event);
        };
        request.onsuccess = (event) => {
            const db = event.target?.result as IDBDatabase;

            resolve(db);
        };

        request.onupgradeneeded = function (event) {
            const db = event.target?.result as IDBDatabase;

            const securityRequirementsStore = db.createObjectStore(
                "security_requirements",
                {
                    keyPath: "id",
                }
            );

            securityRequirementsStore.createIndex("status", "status", {
                unique: false,
            });
            securityRequirementsStore.createIndex(
                "description",
                "description",
                {
                    unique: false,
                }
            );

            const requirementsStore = db.createObjectStore("requirements", {
                keyPath: "id",
            });

            requirementsStore.createIndex(
                "security_requirements",
                "security_requirements",
                {
                    unique: false,
                }
            );
        };
    });
}

export const getDB = loader;
// request.onupgradeneeded = function (event) {
//     const db = event.target.result;
//     // Create an object store
//     const objectStore = db.createObjectStore("MyObjectStore", {
//         keyPath: "id",
//     });
//     // Create an index to search by name
//     objectStore.createIndex("name", "name", { unique: false });
// };

// request.onsuccess = function (event) {
//     const db = event.target.result;

//     // Add data to the object store
//     const transaction = db.transaction("MyObjectStore", "readwrite");
//     const objectStore = transaction.objectStore("MyObjectStore");

//     // Sample data
//     const data = [
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//     ];

//     data.forEach((item) => {
//         objectStore.add(item);
//     });

//     transaction.oncomplete = function () {
//         console.log("All data added successfully.");

//         // Retrieve data
//         const getTransaction = db.transaction("MyObjectStore", "readonly");
//         const getObjectStore = getTransaction.objectStore("MyObjectStore");

//         const getRequest = getObjectStore.getAll();

//         getRequest.onsuccess = function (event) {
//             console.log("Retrieved data:", event.target.result);
//         };
//     };
// };

// request.onerror = function (event) {
//     console.error("Database error:", event.target.errorCode);
// };