function QueueDataStructure() {
  this.queueControl = [];
  this.MAX_SIZE = 5;
}

QueueDataStructure.prototype.isEmpty = function(){
  return this.queueControl.length === 0 ? true : false;
};

QueueDataStructure.prototype.canEnqueue = function(){
  return this.queueControl.length < this.MAX_SIZE ? true : false;
};

QueueDataStructure.prototype.enqueue = function(item){
  if ( this.canEnqueue() ){
    this.queueControl.unshift( item );
    return [ this.queueControl[0] ];
  } else {
    return 'Queue Overflow';
  }
};

QueueDataStructure.prototype.dequeue = function(){
  return this.isEmpty() ? 'Queue Underflow' : this.queueControl.pop();
};
