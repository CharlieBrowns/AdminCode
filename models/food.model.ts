export class Food {
    constructor (
        public id: string,
        public name: string,
        public description: string,
        public price: string,
        public duration: string,
        public type: string,
        public calification: string,
        public state: string,
        public image: Array<any>
    ) {
        
    }
}