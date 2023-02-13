const items = [1, "dev_subbu", false, 1.24];

function ForwardIterator(items) {
  this.items = items;
  this.index = 0;
}

ForwardIterator.prototype = {
  hasNext: function() {
    return this.index < this.items.length;
  },
  next: function() {
    return this.items[this.index++];
  }
}


function BackwardIterator(items) {
  this.items = items;
  this.index = items.length;
}

BackwardIterator.prototype = {
  hasNext: function() {
    return this.index > 0;
  },
  next: function() {
    return this.items[--this.index];
  }
}

console.log("====>> Forward Iterator <<====");
const fwdIter = new ForwardIterator(items);
while (fwdIter.hasNext())
  console.log(fwdIter.next());

console.log("====>> Backward Iterator <<====");
const bckIter = new BackwardIterator(items);
while (bckIter.hasNext())
  console.log(bckIter.next());