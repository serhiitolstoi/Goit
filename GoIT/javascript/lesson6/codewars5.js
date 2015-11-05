function isValidWalk(walk) {
    if(walk.length !== 10){
        return false;
    }
    else{
        return walk.filter( function(direction){return direction === 'n';} ).length ===
            walk.filter( function(direction){return direction === 's';} ).length &&
            walk.filter( function(direction){return direction === 'e';} ).length ===
            walk.filter( function(direction){return direction === 'w';} ).length;
    }
}