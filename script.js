const intro = document.querySelector('h1');
const opening = document.querySelector('h2')
const body = document.querySelector('body');
const passWrap = document.getElementById('passWrap');
const confirm = document.getElementById('confirm');
const key = 'fifi'
const cardWrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card')
const whyT = document.querySelector('.why');
const youT= document.querySelector('.you');
const favT = document.querySelector('.fav');
const sorryT = document.querySelector('.sorry');
const meT = document.querySelector('.me');
const usT = document.querySelector('.us');


cards.forEach((card) => {
    card.addEventListener('click', showWords)
})

let i = 0;
let j = 0;
let k = 0;
let l = 0
let m = 0
let n = 0
let o = 0
let p = 0

    let text = "Please Read Fast Lmao, This Is More Than An Apology But I'm Expressing Myself Through something I Love, I Hope You Like It...(You kinda have to read this once, I was in a rush so I couldn't make it work better and I hope you had a lovely Christmas)"
    let text2 = "I LOVE YOU"
    let textWhy = "You are the sweetest soul I have ever met and I genuinely think you are the one for me and I want to experience so many firsts with you and have you be my last because I don't think there's someone better out there...You bring me so much peace and happiness, I appreciate you a lot Fifi!!!!! It may not seem that way but I really do and please don't mind any errors here and keep in mind that you can only read this once unless you refresh but you are so special to me and this life thing makes a lot of sense when you are around..."
    let textFav = "I spend most of my days thinking about you, I can't even go out without sneaking in a call with you, you made me love something I absolutely hate and it brings me so much joy because it's with YOU, you also warmed my heart when you told me about what you want to do next year, the nails and stuff and I wish you all the best with that my angel, I know you'll do great!!!!"
    let textYou = "You were right, you have showed me nothing but kindness and love and I should have done the same for you, I know we argue a lot but sometimes I'm just trying to be understood and you really get me, you are so perfect, I love your voice, your eyes,  your eyes, EVERYTHING FIFI!!! I LOVE EVERYTHING ABOUT YOU!!!! And you have such nice lips!!!!!!"
    let textMe = "A lot goes on in my head, I'm not sad but it's such a busy place and I really don't know where I am half of the time but I know I want love and all the lovey dovey stuff, I don'tknow how to but I want to learn because it's something I never got right but I really try and I don't want to give up just yet, you gave me hope"
    let textUs = "I think we go well together, I'm not just saying that but we really do and I don't want to lose what we have and it's so crazy that we would have on and off texting before this and I wish we started sooner...Apart from the love which is a big factor, we have a lot of qualities to make a forever work"
    let textSorry = "I am so sorry for what I put you through, I know this won't be enough to fix things but I had to try,  my heart won't let me rest and watch this without a fight and I know it's all my fault. If we don't get to fix things please please please please just know that I loved and I still do, that is my truth Fifi"
    let speed = 150;


function love() {
    
        if (j < text2.length) {
            opening.textContent += text2.charAt(j);
        j++;
        setTimeout(love, speed)
        }
         else {
            opening.style.display ='none'
            passWrap.style.display = 'block'
         }
        
    }

function typeWriter() {

    if ( i < text.length) {
        intro.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    } else {
        intro.style.display = 'none';
        love()
    }

}

function moveToBlocks () {
    let password = document.querySelector('input').value
    console.log('clicking')
    if (password.toUpperCase() === key.toUpperCase() ) {
        passWrap.style.display = 'none'
        cardWrapper.style.display = 'grid'
    }
    console.log(password)
}


function showWords(e) {
    if (e.target.textContent === 'Why I want You') {
        cardWrapper.style.display = 'none'
        why()
    } else if ( e.target.textContent === 'Favourite Moment') {
        cardWrapper.style.display = 'none'
        moment ()
    }
    else if ( e.target.textContent === "I'm Sorry") {
        cardWrapper.style.display = 'none'
        sorry()
        }
    else if ( e.target.textContent === "You") {
        cardWrapper.style.display = 'none'
        you()
        }
    else if ( e.target.textContent === "Us") {
        cardWrapper.style.display = 'none'
        us()
        }
    else if ( e.target.textContent === "Me") {
        cardWrapper.style.display = 'none'
        me()
        }
}

function why() {

    if (k < textWhy.length) {
        whyT.textContent += textWhy.charAt(k);
        k++;
        document.body.style.backgroundColor = ' #ff8fab'
        whyT.style.color = ' #272526'
        setTimeout(why, speed)
    } else {
        whyT.textContent = ''
        document.body.style.backgroundColor = ' #272526'
        cardWrapper.style.display = 'grid'
    }
}

function moment () {
    if (l < textFav.length) {
        favT.textContent += textFav.charAt(l);
        l++;
        setTimeout(moment, speed)
    } else {
        favT.textContent = ''
        cardWrapper.style.display = 'grid'
    }
}

function you () {
    // if the iteration is less than the text lenth
    if (m < textYou.length)  {
      youT.textContent += textYou.charAt(m);  //this is the p or the space it is going to be added in
      m++; //add a letter until it is no longer bigger or smaller
      setTimeout(you, speed) // the funtion set in a timeout to call it everytime until the requirement is met
    } else {
        youT.textContent = ''
        cardWrapper.style.display = 'grid'
    }
}

function me () {
    if (n < textMe.length ) {
        meT.textContent += textMe.charAt(n);
        n++;
        setTimeout(me, speed)
    } else {
        meT.textContent = ''
        cardWrapper.style.display = 'grid'
    }
}

function us () {
    if (o < textUs.length) {
        usT.textContent += textUs.charAt(o);
        document.body.style.backgroundColor = ' #ff8fab'
        usT.style.color = ' #272526'
        o++;
        setTimeout(us, speed);
    } else {
        usT.textContent = ''
        document.body.style.backgroundColor = ' #272526'
         cardWrapper.style.display = 'grid'
    }
}

function sorry () {
    if (p < textSorry.length) {
        sorryT.textContent += textSorry.charAt(p);
        p++;
        document.body.style.backgroundColor = ' #ff8fab'
        sorryT.style.color = ' #272526'
        setTimeout(sorry, speed)
    } else {
        sorryT.textContent = ''
         document.body.style.backgroundColor = ' #272526'
        cardWrapper.style.display = 'grid'
    }
}

confirm.addEventListener('click', moveToBlocks)

typeWriter()