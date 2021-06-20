import {graphObject} from './graphObject';

export default class shortestPath{
    
    constructor(graph, path) {

        this.graph = graph;

        this.nodes = graph.children[0].childNodes[0];

        this.paths = graph.children[0].childNodes[1];

        // this.createGraphObject(graph);

        this.selectedCount = 0;

        this.nodeIDs = [];

        this.nodes.addEventListener('click', (e) => {this.manageClicks(e)});

    }


    // CREATE THE BELOW FUNCTION FOR CUSTOM GRAPHS

    // createGraphObject(graph){

    //     this.graphObj = {};
            
    //     for(let node of this.nodes.children){

    //         console.log(node, node.nextSibling);

    //     }

    //     console.log(this.graphObj);

    // }

    manageClicks(e) {

        if (this.selectedCount < 2){

            const node = e.target; 

            this.nodeIDs.push(node.id);

            this.changeNodeColor(node);
    
            this.selectedCount++;

            if(this.selectedCount === 2){
                this.findSP(this.nodeIDs);
            }

        }
        else {
            
        }

    }

    changeNodeColor(node){

        node.style.fill = "black";

    }

    findSP(ids) {
        
        const startNode = ids[0];

        const endNode = ids[1];

        let iterations = 0;

        let nodeList = '';

        const pathLengths = [];

        let shortestPath;

        function getEachPath(node, iterations, nodeList){

            console.log(node);

            if(node !== startNode){
                nodeList += `${node},`;
            }

            if(node === endNode){
                console.log(iterations);
                nodeList = nodeList.split(',');
                nodeList.pop();
                pathLengths.push(nodeList.length);
                return;
            }
            else if(node === ""){
                return;
            }
            else{
                iterations++;

                for(let currentNode of graphObject.getNext(node)){
                    getEachPath(currentNode, iterations, nodeList);
                }

            }

        }

        getEachPath(startNode, iterations, nodeList);

        shortestPath = calculateSp(pathLengths);

        console.log(shortestPath);

        function calculateSp(pathLengths){
            let shortestPath = pathLengths[0];

            for(let len of pathLengths){

                if(len < shortestPath){
                    shortestPath = len;
                }

            }

            return shortestPath;

        }

    }

}