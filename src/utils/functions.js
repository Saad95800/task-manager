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

export const updateSpaceIDB = (newSpace) => {

    let request = indexedDB.open("task-managerDB", 2);

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("space", "readwrite");

        const spaceStore = transaction.objectStore("space");

        const request = spaceStore.put(newSpace);

        request.onsuccess = function(event) {
            console.log("Space modifié avec succès");
        };

        request.onerror = function(event) {
            console.log("Une erreur est survenue lors de la modification du space");
        };
    }
}

export const insertTableIDB = (newTable) => {

    let request = indexedDB.open("task-managerDB", 2);

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("table", "readwrite");

        const tableStore = transaction.objectStore("table");

        const request = tableStore.put(newTable);

        request.onsuccess = function(event) {
            console.log("Tableau ajouté avec succès");
        };

        request.onerror = function(event) {
            console.log("Une erreur est survenue lors de l'ajout du tableau");
        };
    }
}

export const updateTableIDB = (newTable) => {

    let request = indexedDB.open("task-managerDB", 2);

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("table", "readwrite");

        const tableStore = transaction.objectStore("table");

        const request = tableStore.put(newTable);

        request.onsuccess = function(event) {
            console.log("Tableau modifié avec succès");
        };

        request.onerror = function(event) {
            console.log("Une erreur est survenue lors de la modification du tableau");
        };
    }
}

export const deleteTableIDB = (tableId) => {

    let request = indexedDB.open("task-managerDB", 2);

    request.onsuccess = function(event) {
        const db = event.target.result;

        const transaction = db.transaction("table", "readwrite");

        const tableStore = transaction.objectStore("table");

        const request = tableStore.delete(tableId);

        request.onsuccess = function(event) {
            console.log("Tableau supprimé avec succès");
        };

        request.onerror = function(event) {
            console.log("Une erreur est survenue lors de la suppression du tableau");
        };
    }
}
