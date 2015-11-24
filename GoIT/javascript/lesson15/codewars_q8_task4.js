function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}

Ship.prototype.isWorthIt = function () {
    var value = this.crew * 1.5;
    return this.draft - value > 20;
}