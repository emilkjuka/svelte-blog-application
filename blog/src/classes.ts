interface blogPostInterface {
    author: string;
    date: string;
    content: string;
}

class blogPost implements blogPostInterface{

    author: string
    date : string
    content : string 

    constructor (){
    }

}

export {blogPost}