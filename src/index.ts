import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedListCollection } from './LinkedListCollection';

const numberCollection = new NumberCollection([20, -50, -10, 1])
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("hello");
characterCollection.sort();
console.log(characterCollection.data);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(20);
linkedListCollection.add(10);
linkedListCollection.add(-10);
linkedListCollection.add(200);
linkedListCollection.sort();
console.log(linkedListCollection.print());

