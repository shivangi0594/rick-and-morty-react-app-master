export const sortFilteringStringItems = (key, order = "asc") => {
    return function(a, b) {
        debugger;
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            return 0;
        }

        if (
            a[key] === "" ||
            typeof a[key] === "object" ||
            b[key] === "" ||
            typeof b[key] === "object"
        ) {
            return 0;
        }
        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        comparison = varA.localeCompare(varB);

        return order === "desc" ? comparison * -1 : comparison;
    };
};

export const APIKeysObj = {
    genderMale: "Male",
    genderFemale: "Female",
    genderUnknown: "unknown",
    speciesHuman: "Human",
    speciesMytholog: "Mytholog",
    speciesOther: "Other",
    originUnknown: "unknown",
    originApocalyptic: "Post-Apocalyptic Earth",
    originNuptia: "Nuptia 4",
    originOthers: "Others"
};

export const CHARACTERSCOUNT = 20;
