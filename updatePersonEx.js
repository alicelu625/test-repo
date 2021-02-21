
/* scenerio
    persons[
        {
            name: "person0",
            items: [item0, item2]
        },
        {
            name: "person1",
            items: [item0, item1]
        }
    ]
*/
//action.personId = 0
//action.itemId = 1
//add item1 to persons[0] in persons[0].items

//add item to person.items array - persons[1].items
//personItems = [item0, item2, item1]
let personItems = state.persons[action.personId].items.concat(state.items[action.itemId].name);
//update person object - persons[1]
/*
updatePerson =
    {
        name: "person0",
        items: [item0, item2, item1]
    }
*/
let updatePerson = updateObject(state.persons[action.personId], {items: personItems});
//update persons array by replacing w/ new person object - persons
//swap out state.persons[0] with updatePerson object we just created
updatePersons[action.personId] = updatePerson;