

# Start project

## First STEP 👍🏼
Create .env file with two parameters :
- **DATABASE_URI="mongodb://pokemon-db:27017/pokemons"**
- **PORT=5000**

## Second STEP ✌🏼
Build docker images in api and client folder 

### Third STEP
Run "docker-compose up" in the parent folder


**`Thanks & enjoy 😊 `**


## Hello, FP

## <a name='TOC'>🐼 Summary</a>

- [Rules](#rules)
- [Overview](#overview)
- [Exercises](#exercises)
- [Credits](#credits)

## <a name='overview'>🦊 Rules</a>

Hi, here are some rules to carry out this story oav;

- You **MUST** create a git repository named `cx-db-oav1-poke-mon-go`
- You **MUST** create a file called `.author` with your firstname and lastname followed by a newline.

```sh
~/fp-exercises ❯❯❯ cat -e .author
Majdi Toumi$
```

> Of course, you can talk about the subject with other developers, peer-learning is
> the key to be a better developer. Don't hesitate to ask questions or help people on slack.

> Don't forget, there is no useless question :-)

- You **MUST** return the project before Friday October, 9 at 23:42
- You **MUST** add `pu-erh` user as a collaborator.
- YOU **MUST** define all functions signature by yourself :)

## <a name='overview'>🐱 Overview</a>

The purpose of theses exercises is simple, display and mutate pokemons.

## <a name='steps'>🐨 Steps</a>

### 00 Prélude

Your project **MUST** run with **Docker** : Database, server, client, etc.

### 01 Bonjour, Pokémon

You **MUST USE** [json-pokemon](https://www.npmjs.com/package/json-pokemon) package to fill your Mongo database ;<br />
Feel free to architect your collections and documents as you want.

> Tips, create a function that did it

### 02 Hello, API

Create a Node/Typescript API that have the followings routes:

`/pokemons`<br />
`/pokemons/:id ->>  READ | UPDATE (any fields but not the picture) | DELETE`

Each CRUD method **MUST** called mongoose but how ? Directly or via models/schemas wrapper ?

> Take an inspiration [here](https://hackernoon.com/how-to-link-mongoose-and-typescript-for-a-single-source-of-truth-94o3uqc)

### 03 Salam Postman

Now that your API server is set, let's create a Postman collection that we can share to any developer :)

> Take a look [here](https://www.postman.com/collection/)

### 04 Yo, ui

Well, let's visuzalize pokemons datas and interact with your APIs !<br />

You **MUST** create pages using any uix library you want : React.js, Angular.js, Vue, etc.

For each single pokemon page, we must have an edit button for editing any fields and a remove button to delete the pokemon.

### 05 Konichiha, #soon


## <a name='credits'>🐵 Credits</a>

Craft with :heart: in **Paris**.
