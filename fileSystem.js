import fs from 'fs';
const file = "https://github.com/boaslah/My-Blog/blob/main/src/posts.json";


export default{
    readFile (){
        let rawdata = fs.readFileSync(file);
        let posts = JSON.parse(rawdata);
        return posts;
    },

    writeFile (comment, index){
        let posts = this.readFile();
        posts.posts[index].comments.push(comment);
        let data = JSON.stringify(posts);
        fs.writeFileSync(file, data);
    }
}