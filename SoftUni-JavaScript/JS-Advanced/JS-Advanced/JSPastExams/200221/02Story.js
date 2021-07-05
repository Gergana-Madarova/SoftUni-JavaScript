class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
        this._idCount = 1;
    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username === this.creator) {
            throw new Error("You can't like your own story!");
        }
        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        }
        this._likes.splice(this._likes.indexOf(username), 1);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        const found = this._comments.find(c => c.id === id);

        if (!id || !found) {
            const comentObj = {
                username,
                content,
                id: this._idCount,
                replies: []
            }

            this._idCount++;
            this._comments.push(comentObj);

            return `${username} commented on ${this.title}`;
        }

        let replied = '';
        this._comments.forEach(c => {
            if (c.id === id) {
                const reply = {
                    id: `${id}.${c.replies.length + 1}`,
                    username,
                    content
                }

                c.replies.push(reply);
                replied += "You replied successfully";
            }
        })

        return replied;
    }

    toString(sortingType) {
        //stringify - Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
        //parse - Converts a JavaScript Object Notation (JSON) string into an object.
        const sorted = JSON.parse(JSON.stringify(this._comments));

        if (sortingType === 'asc') {
            sorted.sort((a, b) => {
                return a.id - b.id;
            })
        }
        if (sortingType === 'desc') {
            sorted.sort((a, b) => {
                a.replies.reverse();
                b.replies.reverse();
                return b.id - a.id;
            })
        }
        if (sortingType === 'username') {
            sorted.sort((a, b) => {
                a.replies.sort((x, y) => x.username.localeCompare(y.username));
                b.replies.sort((x, y) => x.username.localeCompare(y.username));
                return a.username.localeCompare(b.username);
            })
        }

        let commentsStr = `Comments:\n`;
        sorted.forEach(c => {
            commentsStr += `-- ${c.id}. ${c.username}: ${c.content}\n`;
            c.replies.forEach(r => {
                commentsStr += `--- ${r.id}. ${r.username}: ${r.content}\n`;
            })
        })

        return `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\n${commentsStr.trimEnd()}`;
    }
};




let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));