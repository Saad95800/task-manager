export const insertSpaceIDB = (newSpace) => {

    let request = indexedDB.open("task-managerDB", 2);

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("space", "readwrite");

        const spaceStore = transaction.objectStore("space");

        const request = spaceStore.add(newSpace);

        request.onsuccess = function(event) {
            console.log("Space ajouté avec succès");
        };

        request.onerror = function(event) {
            console.log("Une erreur est survenue lors de l'ajout du space");
        };
    }
}