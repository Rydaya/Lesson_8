//Article
//title, body
//getTitle
//getBody
//isActive
//updateTitle 32max
//updateBody 128max
//publish
//archive


//Collection
//add
//remove удалять по ссылке(id)
//getArticles все у кого из эктив тру
//getArchive все у кого из эктив фолс


function Article(title, body) {
  this.title = title;
  this.body = body;
  this.isActive = true;
}

Article.prototype.getTitle = function() {
  return this.title;
}

Article.prototype.getBody = function() {
  return this.body;
}

Article.prototype.updateTitle = function() {
   if(this.title.length > 32) {
   	this.title = this.title.substr(0, 32).trim() + '...';
   	return this.title;
  	}
}

Article.prototype.updateBody = function() {
  if(this.body.length > 128) {
   	this.body = this.body.substr(0, 128).trim() + '...';
   	return this.body;
  }
}

Article.prototype.publish = function() {
  return this.isActive = true;
}

Article.prototype.unpublish = function() {
  return this.isActive = false;
}

function Collection() {
  this.articles = [];
}

Collection.prototype.add = function(article) {
  return this.articles.push(article);
}

Collection.prototype.remove = function(article) {
  for(let item = 0; item < this.articles.length; item++) {
    if(this.articles[item] == article) {
      this.articles.splice(item, 1);
    }
  }
  return this.articles;
}

Collection.prototype.getArticle = function() {
  let arrayTrue = [];
  for(let item of this.articles) {
    if(item.isActive == true) {
      arrayTrue.push(item);
    }
  }
  return arrayTrue;
}

Collection.prototype.getArchive = function() {
  let arrayFalse = [];
  for(let item of this.articles) {
    if(item.isActive == false) {
      arrayFalse.push(item);
    }
  }
  return arrayFalse;
}

article1 = new Article("title1", "body1");
article2 = new Article("title2", "body2");
article2.updateBody();
article2.updateTitle();
article2.unpublish(); 
let colection = new Collection();
colection.add(article1);
colection.add(article2);
console.log(colection.getArticle());