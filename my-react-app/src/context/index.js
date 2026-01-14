
import {
  home,
  computer,
  shopping,
  contact,
  settings,
  instagram,
  telegram,
  twitter,
  discordBlack,
  facebook,
  business

} from '../assets/index'


export const nav = [{
      id : 1 ,
      title : 'Home',
      icon: home,
      style: {
        color: 'white',
        textDecoration : 'underline',
        borderRadius : 12 + 'px'
      }
      
    
}  , {
    id: 2 ,
    title :'Computers' ,
    icon: computer,
      style: {
        color: 'white',
        textDecoration : 'underline',
        borderRadius : 12 + 'px'
      }
} , {
    id : 3 ,
    title :'orders' ,
    icon: business,
      style: {
        color: 'white',
        textDecoration : 'underline',
        borderRadius : 12 + 'px'
      }
} ,  {
    id : 5 ,
    title : 'Contact',
    icon: contact,
      style: {
        color: 'white',
        textDecoration : 'underline',
        borderRadius : 12 + 'px'
      }
}];

export const filter = ['Laptops' , 'Desktops' , 'Monitors' , 'Accessories' ]

export const footer = [{
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
]
