'use strict';

$(function() {
    var ToDo = function() {

        this.model = [
            { text: '������ ������' },
            { text: '����� �����' },
            { text: '������� �� ������' }
        ];

        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');
        this.btnAdd = $('.btn-primary');


        this.init();
    };

    // �������� ������ ����� ������ - ����������� ��������� �� ������� ������
    ToDo.prototype.getLength = function() {
        return this.model.length;
    };

    // �������������� html ��� ����� ������ � ���������
    ToDo.prototype.getItemHtml = function (position, item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" class="btn btn-info btn-up" data-index=":index">&#8593;</button></td><td><button type="button" class="btn btn-info btn-down" data-index=":index">&#8595;</button></td><td><button type="button" data-index=":index" class="btn btn-danger">?</button></td></tr>';

        return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position - 1);
    };

    // �������� ����� ������� � ������
    ToDo.prototype.addItem = function (todoText) {
        var newTodo = { text: todoText };
        this.model.push(newTodo);

        this.appendRenderItem(this.getLength(), newTodo);
    };

    // �������� � DOM ����� ������� � ��� ������
    ToDo.prototype.appendRenderItem = function (index, item) {
        this.todoList.append(this.getItemHtml(index, item.text));
    };

    // ����������� ���� ������ ���������
    ToDo.prototype.renderList = function () {
        var list = '',
            __self = this;

        $.each(this.model, function(index, item) {
            list += __self.getItemHtml(index + 1, item.text);
        });

        this.todoList.html(list);
    };

    // �� ������ �����
    ToDo.prototype.onFormSubmit = function (e) {

        e.preventDefault();

        this.addItem(this.inputField.val());

        this.form.trigger('reset');

        this.btnAdd[0].setAttribute('disabled', 'true');

    };

    // �������� ��������
    ToDo.prototype.removeItem = function (index) {
        this.model.splice(index, 1);

        this.renderList();
    };

    //����������� ����� ���� ��������
    ToDo.prototype.upDownItem = function (index, movingDirection) {
        var movingItem,
            tmpItem;

        switch(movingDirection) {
            case 'up':
                console.log('up: ' + index);
                if(index != 0) {
                    tmpItem = this.model[index];
                    this.model[index] = this.model[index - 1];
                    this.model[index - 1] = tmpItem;

                    this.renderList();
                }

                break;
            case 'down':
                console.log('down: ' + index);
                if(index < this.getLength()) {
                    tmpItem = this.model[index];
                    this.model[index] = this.model[index + 1];
                    this.model[index + 1] = tmpItem;

                    this.renderList();
                }

                break;
            default:
                break;
        }

    };

    // �������������
    ToDo.prototype.init = function () {
        var __self = this;

        this.renderList();

        this.todoList.on('click','.btn-danger', function (e) {
            var index = $(e.target).data('index');

            __self.removeItem(index);
        });

        this.todoList.on('click','.btn-info', function (e) {
            var index = $(e.target).data('index');
            var direction;
            if ($(e.target).hasClass('btn-down')){
                direction = 'down';
            }
            if ($(e.target).hasClass('btn-up')) {
                direction = 'up';
            }

            if( ((index != 0) && (direction == 'up')) ||  ((index != __self.model.length - 1) && (direction == 'down'))) {
                __self.upDownItem(index, direction);
            }
        });

        this.form.submit(function (e) {
            __self.onFormSubmit(e);
        });

        //Disable addButton ����� � inputField �����
        $( '.task-form__text' ).on( "input", function(e) {
            if (!e.target.value) {
                $('.btn-primary').attr( 'disabled', true);
            } else {
                $('.btn-primary').attr( 'disabled', false);
            }
        });

    };


    window.todo = new ToDo();
});
