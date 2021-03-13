export const graphObject = {

    prevNode: ''
    ,
    'e01': {
        next: ['e02', 'e03'],  
    },
    'e02': {
        next: ['e04', 'e06']
    },
    'e03': {
        next: ['e04', 'e05']
    },
    'e04': {
        next: ['e06','e07']
    },
    'e05':{
        next: ['e07', 'e08']
    },
    'e06': {
        next: ['e07']
    },
    'e07': {
        next: ['e08', 'e09', 'e10', 'e11']
    },
    'e08': {
        next: ['e12']
    },
    'e09': {
        next: ['e13']
    },
    'e10': {
        next: ['e13','e14']
    },
    'e11': {
        next : ['e14', 'e15']
    },
    'e12': {
        next : ['e11']
    },
    'e13': {
        next : ['end']
    },
    'e14': {
        next : ['e15']
    },
    'e15': {
        next: ['end']
        },
    'end': {
        next : ['']
    },

    getNext(node){

        let nextArr = this[node].next;

        if(nextArr.includes(this.prevNode)){
            nextArr.splice(nextArr.indexOf(node), 1);
        }

        this.prevNode = node;

        return nextArr;
    }

};