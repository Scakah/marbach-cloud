export class Card{
    public title: string;
    public imgLink?: string;
    public body: string;

    public constructor (title: string, body: string, imgLink?: string) {
        this.title = title;
        this.imgLink = imgLink;
        this.body = body;
    }
}
