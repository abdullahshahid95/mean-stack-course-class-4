class User
{
    id: number; name: string; fatherName: string;
    class: string; universityId: number;

    setInfo(id: number, name: string, fatherName: string, sclass: string, universityId: number)
    {
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.class = sclass;
        this.universityId = universityId;
    }

    getInfo(): (string | number)[]
    {
        return [this.id, this.name, this.fatherName, this.class, this.universityId];
    }
}

class Book extends User
{
    //Book attributes = id: number; name: string; departmentId: number; departmentName: string;
    
    books = [[], [], [], []];

    setBook()
    {
        //Assigning physics books in the array
        for(var i: number = 1; i <= 10; i++)
        {
            this.books[0].push({id: i, name: "abx by xyz", departmentId: 1, departmentName: "Physics"});
        }

        //Assigning chemistry books in the array
        for(var i: number = 1; i <= 10; i++)
        {
            this.books[1].push({id: i, name: "abx by xyz", departmentId: 2, departmentName: "Chemistry"});
        }

        //Assigning botany books in the array
        for(var i: number = 1; i <= 10; i++)
        {
            this.books[2].push({id: i, name: "abx by xyz", departmentId: 3, departmentName: "Botany"});
        }

        //Assigning zoology books in the array
        for(var i: number = 1; i <= 10; i++)
        {
            this.books[3].push({id: i, name: "abx by xyz", departmentId: 4, departmentName: "Zoology"});
        }
    }
}

class Library extends Book
{
    department: string;
    bookName: string;
    departmentId: number;
    borrowBooks()
    {
        this.setInfo(
            10,
            prompt("Enter name"),
            prompt("Enter father name"),
            prompt("Enter class"),
            5
        );

        var bookId: number;

        this.departmentId = parseInt(prompt("Select department."
                                        + "\n1. Physics"
                                        + "\n2. Chemistry"
                                        + "\n3. Botany"
                                        + "\n4. Zoology"));
        
        if(this.departmentId < 0 || this.departmentId > 4)
            alert("Department not found");
        
        else
        {
            var bookList: string = "";

            this.books[this.departmentId - 1].forEach(element => {
                bookList += "\n" + element.id + ". " + element.name;
                this.department = element.departmentName;
            });

            bookId = parseInt(prompt("Select " + this.department + " book" + bookList));

            var flag: number = 0;
            this.books[this.departmentId - 1].forEach(element => {
                if(bookId == element.id)
                {
                    flag = 1;
                    this.bookName = element.name;
                    this.books[this.departmentId - 1].splice(element.id - 1, 1);
                }
            });

            if(flag == 0)
                alert("Book not found");
        }
    }
}

var library = new Library();
library.setBook();

do
{
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
    
    var yN: string;
    yN = prompt("Borrow another book? Y/N");
}
while(yN == 'y' || yN == 'Y');