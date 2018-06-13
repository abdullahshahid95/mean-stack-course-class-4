var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setInfo = function (id, name, fatherName, sclass, universityId) {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this["class"] = sclass;
        this.universityId = universityId;
    };
    User.prototype.getInfo = function () {
        return [this.id, this.name, this.fatherName, this["class"], this.universityId];
    };
    return User;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        //Book attributes = id: number; name: string; departmentId: number; departmentName: string;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.books = [[], [], [], []];
        return _this;
    }
    Book.prototype.setBook = function () {
        //Assigning physics books in the array
        for (var i = 1; i <= 10; i++) {
            this.books[0].push({ id: i, name: "abx by xyz", departmentId: 1, departmentName: "Physics" });
        }
        //Assigning chemistry books in the array
        for (var i = 1; i <= 10; i++) {
            this.books[1].push({ id: i, name: "abx by xyz", departmentId: 2, departmentName: "Chemistry" });
        }
        //Assigning botany books in the array
        for (var i = 1; i <= 10; i++) {
            this.books[2].push({ id: i, name: "abx by xyz", departmentId: 3, departmentName: "Botany" });
        }
        //Assigning zoology books in the array
        for (var i = 1; i <= 10; i++) {
            this.books[3].push({ id: i, name: "abx by xyz", departmentId: 4, departmentName: "Zoology" });
        }
    };
    return Book;
}(User));
var Library = /** @class */ (function (_super) {
    __extends(Library, _super);
    function Library() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Library.prototype.borrowBooks = function () {
        var _this = this;
        this.setInfo(10, prompt("Enter name"), prompt("Enter father name"), prompt("Enter class"), 5);
        var bookId;
        this.departmentId = parseInt(prompt("Select department."
            + "\n1. Physics"
            + "\n2. Chemistry"
            + "\n3. Botany"
            + "\n4. Zoology"));
        var bookList = "";
        this.books[this.departmentId - 1].forEach(function (element) {
            bookList += "\n" + element.id + ". " + element.name;
            _this.department = element.departmentName;
        });
        bookId = parseInt(prompt("Select " + this.department + " book" + bookList));
        var flag = 0;
        this.books[this.departmentId - 1].forEach(function (element) {
            if (bookId == element.id) {
                flag = 1;
                _this.bookName = element.name;
                _this.books[_this.departmentId - 1].splice(element.id - 1, 1);
            }
        });
        if (flag == 0)
            alert("Book not found");
    };
    return Library;
}(Book));
var library = new Library();
library.setBook();
do {
    library.borrowBooks();
    var user = library.getInfo();
    console.clear();
    console.log("***Borrower details***\n");
    console.log("Name: " + user[1]);
    console.log("Father name: " + user[2]);
    console.log("Class: " + user[3]);
    console.log("Book borrowed: " + library.department + " " + library.bookName);
    // console.log("Remaining " + library.department + " books: " 
    //                                             + library.books[library.departmentId - 1].length);
    var yN;
    yN = prompt("Borrow another book? Y/N");
} while (yN == 'y' || yN == 'Y');
