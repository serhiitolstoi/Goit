'use strict';

function Article() {
    this.date = new Date;
    Article.count++;
    Article.lastDate = this.date;
}

Article.count = 0;

Article.showStats = function() {
    alert( '���������� ��������� ��������: ' + this.count + ', ��������� ����: ' + this.lastDate );
};

new Article();
new Article();
new Article();
Article.showStats();

new Article();
new Article();
Article.showStats();

