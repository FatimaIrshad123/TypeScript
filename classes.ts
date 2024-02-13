abstract class country{
    
    public planet = 'Earth';
    public name : string;
    public language : string;
    public population : number;
    public populationGrowthRate : number;
    private _privacy : string;
    private _leader : string;
    
    constructor(name : string,
     language : string,
     population : number,
     populationGrowthRate : number,
     _privacy : string,
     _leader : string
    ){
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrowthRate = populationGrowthRate;
        this._privacy = _privacy;
        this._leader = _leader
    }
    public abstract populationGrowth():number;

    public get privateData():string {return this._privacy};
    
    public set leader(newleader : string){
        this._leader = newleader
    }
    public greeting():string {return 'Hello'};
}
    class OIC extends country {
        constructor(name : string,
            language : string,
            population : number,
            populationGrowthRate : number,
            _privacy : string,
            _leader : string) {
            super(name,language,population,populationGrowthRate,_privacy,_leader)
        }
        Religion = 'Islam';
        formation = 1947;
        public greeting():string {return 'Assalam-o-Alliakum'};
        public populationGrowth(): number {
            this.population = this.population * (1 + this.populationGrowthRate / 100);
            return this.population;
        }
    }   
    
    let pakistan = new OIC('Pakistan',"Urdu",123455,1.2,'Pakistan Private Data','Quaid-e-Azam');
    pakistan.populationGrowth();
    console.log(pakistan.greeting());
    pakistan.leader = 'Allama Iqbal';
    
    console.log(pakistan);
    //console.log(pakistan.privateData);
    //console.log(pakistan.leader);