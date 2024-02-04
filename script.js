let isMobile = window.matchMedia("only screen and (max-width: 600px)").matches;
page=0;

let pages = [
    [
        "ct[]Arrival",
        "nt[]Ding Ding! Ding Ding!",
        "nt[]The alarm bell strikes you awake, it’s March 19th, 1982. Marked on your calendar, it is camping day. You and your group of friends: Jimmy, Sarah, Tony, Liam and Jake were all going camping in the woods, a retreat from society for 2 weeks. You finally get up after laying in bed for a few minutes after somehow ignoring the blaring alarm. Click! You switch it off, knowing the peace of silence.",
        "nt[]Now up from your bed, you decide to eat your breakfast, a ham and cheese sandwich and a fresh cup of water. Afterwards, you take your clothes and get dressed, brush your teeth and wash up. Around thirty minutes after you’ve woken up, you hop in your car and drive to each of your friends, exchanging friendly greetings before driving to the campsite. You and your friends groan for the large hike you must conquer, yet Liam stays silent. Unloading your luggage from the car, one bag is slightly larger than most but you don’t pay much attention to it.",
        "nt[]You begin your hike, step by step, you start at a fast pace, yet slowly, the mountain begins to get steeper and steeper, each breath quicker than the last until you’re climbing, hand by hand, rock by rock."
    ],
    [
        "nt[]You latch your hook upon an incline to avoid falling down, looking down you see your friends much further down than you. The higher you get, the colder you feel. After a gruelling half-hour of this, which felt to you like 3 hours, you reach your campsite.",
        "nt[]A grassy field upon this large mountain, without the requirement of climbing to its peak. Your friends, still around 10 minutes behind you, you lay down upon the grassy fields, ignoring the grass itching your body, take a quick little rest.",

        "ct[]Early morning pitch",
        "nt[]Slap!",

        "nt[]“Wake up sleepyhead”, Sarah said, “You could have at least sparked the fire”.",
        "nt[]“Sarah, the early bird gets the rest, doesn’t work for it like the late ones” you respond, knowing you made a terrible, yet true, joke. Unfortunately, you know you must help them, reaching into your bag you grab your tent kit. Only just standing up you pick it up, you take each peg and place it into the ground with quick succession, hooking the tent’s fabric through the pegs and creating your very own, depressingly small, tent.",
    ],
    [
        "nt[]After you have done this, you begin to gather firewood in the area, taking every stick, big and small, carrying it like a baby back to the campsite. Putting the sticks to the side, you create a ring of stones Tony had gathered for you and create a stick structure to engulf in flames later on.",
        "nt[]“Would anyone like some water?”, you ask, causing everyone to snap their heads around like a pack of hungry wolves. In spite of their thirst, you didn’t have water on you,",
        "nt[]“Come with me, waterfall’s here”, you say.",

        "nt[]Liam and Sarah groan to this,",
        "nt[]“Really, we have to collect our own water?” Liam asked.",
        "nt[]“You wanted to join in mi amigo, so come on or you can hike your way back down, sure it’d be lots of fun.”",
        "nt[]Begrudgingly, they follow you through the clearing with a river striking right through it. A mystical, yet incredibly calming waterfall falls from the peaks above, streams fall further down, creating a beautiful, slightly hypnotising, scene. After immersing yourself in its beauty, you take a container and catch some water from the stream to then take back to your campsite.",
    ],
    [
        "ct[]Late night meal",
        "nt[]Placing the water above the campfire, you spark the fire and watch as each bubble pops to the heat. After a few minutes, you take it off and let the water cool as everyone else arrives. Everyone sits around the fire, feeling the sweet warmth they had longed for since this began.",
        "nt[]“Today was exhausting, how was this supposed to be fun?” Liam groaned.",
        "nt[]“All you’ve seemed to do is moan Liam, you wanted to join us” you respond, slightly annoyed by his constant complaints.",
        "nt[]In anger, Liam storms off back to the waterfall, yet nobody comes to his aid. You think everyone felt the same about how annoying he’s been.",
        "nt[]“Just leave him, he’ll cool off sooner or later” Jake said.",

        "nt[]After the dynamic of the evening cools, you reach into your bag.",
        "nt[]“Agh!” you groan, cutting your hand on something sharp in the bag, pulling your hand out of the bag you take out marshmallows and chocolate chip cookies.",
    ],
    [
        "nt[]You feel like their mouths are drooling from hunger but you ignore it.",
        "nt[]“Time for smores!”, you say excitedly, “Get some sticks and we can cook them on the fire.”. Everybody scrambles to get them, glad to finally eat something. You join them, starved by the hike, finding a stick and placing a marshmallow on it. You and your friends hold marshmallows above the flame, turning and turning until their marshmallows are ready. Placing the marshmallow on the chocolate chip cookies you feast into them like a rabid dog.",

        "nt[]“Care for a little campfire story?” Jake asks.",
        "nt[]“Yeah, don’t make me too scared though or I’ll have to join Liam”, Tony says, causing the friend group to laugh.",
        "nt[]“Shush down now, or it might hear you.” Jake whispers.",
        "nt[]“What’s ‘it’, Jake” Tony ponders.",

        "nt[]“Let me tell you the story then, this is the story of how my childhood friend was taken.”",
    ],
    [
        "nt[]“I was 15 years old, me and Jacob, my friend, snuck out after school. We went to a small area hidden by a forest, we heard that illegal stuff went down there, so we thought it’d be funny, we weren’t in our right minds at the time. We’d been there for quite some time, around the same time it is right this moment, we heard it. Branches cracked around us in quick succession, it was circling us. We took it as just us being high but then I saw it, a large blindingly white figure, it spanned nearly 7 feet, I have no idea how I never saw it before. I screamed his name to run, but it was in vain. The thing’s large hands with twisted fingers like branches grabbed his neck. CRACK! Jacob was no more. I ran home in tears, everyday I fear it.”",

        "nt[]Chills were sent down the entire group’s spine.",
        "nt[]“J-Jake, was that real?” Sarah stutters. However, without time to respond everyone hears a Snap! Snap! You, Tony and Sarah scream in fear. As soon as whatever snapped those branches heard your screams, it stood still.",
        "nt[]“What the hell are you guys screaming about?” Liam asks as he returns from the waterfall.",
        "nt[]“Oh, it’s just you Liam.” you say, “I think we should all get some rest, that story has got me terrified”. Everyone nods in agreement, finishing their snack and getting into their tents to sleep."
    ],
    [
        "ct[]Screams of the night",
        
        "nt[]It was late, probably past midnight. You were sat up, unsure of why you were awake. That’s when you heard it. “HELP! SOMEONE HELP ME! I THINK MY ARM IS BROKEN I CAN’T SWIM!” someone screamed, it sounded to be Tony. You got up, going to unzip your tent, but it was already open. Running out you hear screams of pure agony. You know the sound was Tony’s voice, it came from the river. Everyone but Sarah and Jake were there, yet you ignored it for the distress. You, and the friends that were with you, ran to the river to see Tony. He was flailing in the river and struggling to breathe, he was still screaming, wasting his last breaths. “Tony!” you scream in desperation, running to him, but then he falls. He falls down the waterfall to his death.",

        "nt[]Nearly as soon as his life ended, Sarah and Jake arrived, together. You and your friends are too overwhelmed in tears to realise their arrival.",
        "nt[]“What’s wrong, guys?” Sarah asks, seemingly trying to sound innocent.",
        "nt[]“WHERE THE HELL WHERE YOU SARAH?” you scream, “I SWEAR TO GOD WHAT THE HELL IS WRONG WITH YOU?”. You can barely control yourself with the loss of Tony."
    ],
    [
        "nt[]“W-what?” Sarah asks, stuttering.",
        "nt[]“I CAN’T BELIEVE YOU BOTH, YOU JUST GO HOOK UP OR WHATEVER THE HELL YOU WERE DOING WHILE TONY DIES.”, you finish, your throat now sore from the screaming and crying.",
        "nt[]“T-tony’s dead?” Jake asks, quietly and scared.",
        "nt[]“His arm was broken and he got swept to his death…” you say in a quiet tone.",

        "nt[]“Guys, there’s a note”, Liam exclaims, seeming to be much more calm than the rest of us, “It says ‘Oh Tony, maybe you shouldn’t make fun of such stories~’.”. Liam shows the note to us, it seems to be rushed and freshly written.",
        "nt[]“Let’s get some water and calm down, we need to figure out what the hell to do”, you say, your voice still weary."

    ]
]

function pageId(num){
    if (isMobile){
        return 'leftpage'
    }else{
        if (num % 2 == 0){
            return 'leftpage';
        }
        return 'rightpage';
    }
}

function genPages(){
    if (isMobile){
        n=page;
        document.getElementById(`${pageId(n)}text`).innerHTML='';
        for (i=0; i<pages[n].length; i++){
            t=pages[n][i].split('[]');
            document.getElementById(`${pageId(n)}num`).textContent=`Page ${n+1}`;
            document.getElementById(`${pageId(n)}text`).innerHTML+=`<span class="${t[0]}">${t[1]}</span><br><br>`;
        }
    }else{
        for (n=page; n<=page+1; n++){
            document.getElementById(`${pageId(n)}text`).innerHTML='';
            for (i=0; i<pages[n].length; i++){
                t=pages[n][i].split('[]');
                document.getElementById(`${pageId(n)}num`).textContent=`Page ${n+1}`;
                document.getElementById(`${pageId(n)}text`).innerHTML+=`<span class="${t[0]}">${t[1]}</span><br><br>`;
            }
        }
    }
}

function nextPage(){
    if (isMobile){
        page+=1;
    }else{
        page+=2;
    }
    genPages();
    localStorage.setItem("page",page+1);
}

function prevPage(){
    if (isMobile){
        page-=1;
    }else{
        page-=2;
    }
    genPages();
    localStorage.setItem("page",page+1);
}

function mobileUpd(){
    document.getElementById('rightpage').classList='hide';
    genPages();
}

function longUpd(){
    document.getElementById('rightpage').classList='page';
    genPages();
}

if (isMobile){
    mobileUpd();
}else{
    longUpd();
}

setInterval(() => {
    var check = window.matchMedia("only screen and (max-width: 600px)").matches;
    if (check != isMobile){
        isMobile=check;
        if (isMobile){
            mobileUpd();
        }else{
            longUpd();
        }
    }
}, 10);

function read(){
    var elms = document.getElementsByClassName('tohide');
    for (i=0; i<elms.length; i++){
        elms[i].classList+=' hide';
    }
    document.getElementById('reading').classList='';
    genPages();
}

function fixPageNum(){
    num=document.getElementById('pagenumber').value;
    num=num.replace("e", "");
    num=num.replace("-", "");
    if (num==""){num="1"}
    num=Number(num);
    if (num <= 0){ num=1; }
    if (num > pages.length){ num=pages.length; }
    document.getElementById('pagenumber').value=num;
    localStorage.setItem("page",num);
    page=num-1;
}

if (`${localStorage.getItem("page")}`=='null') {
    localStorage.setItem("page",1);
}

page=Number(localStorage.getItem("page"))-1;
document.getElementById('pagenumber').value=Number(localStorage.getItem("page"));