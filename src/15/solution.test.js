const { solution, defaultInput } = require('./');

const defaultArgs = defaultInput.split('\n,');

test('Provided test cases', () => {
    expect(solution('2,2')).toBe('6');
});

test('Custom test cases', () => {
    expect(solution('-1,-1')).toBeUndefined();
    expect(solution('0,0')).toBeUndefined();
    expect(solution('1,1')).toBe('2');
    expect(solution('3,3')).toBe('20');
    expect(solution('4,4')).toBe('70');
    expect(solution('10,10')).toBe('184756');
    expect(solution('28,28')).toBe('7648690600760440');
    expect(solution('100,100')).toBe('90548514656103281165404177077484163874504589675413336841320');
    expect(solution('1000,1000')).toBe('2048151626989489714335162502980825044396424887981397033820382637671748186202083755828932994182610206201464766319998023692415481798004524792018047549769261578563012896634320647148511523952516512277685886115395462561479073786684641544445336176137700738556738145896300713065104559595144798887462063687185145518285511731662762536637730846829322553890497438594814317550307837964443708100851637248274627914170166198837648408435414308177859470377465651884755146807496946749238030331018187232980096685674585602525499101181135253534658887941966653674904511306110096311906270342502293155911108976733963991149120');
    expect(solution('10000,10000')).toBe('2245602662746345541551569436157863147589736965779878243620710432072380220323594045444472025293862316422309263843389696601194422592336037980842489107531389451830672280612433657530040454017679073575902237192364811070856775330598231460644117219368118763325182774686432525080213090160115673919689862107981042354851670966818948676564830140501103187863794706664465811607040131101683992056451405543094155968811920452571949507557600467174912328072850455729969720191780701452688854257603611847037827605552582859834242788236262670736603455466219593151999063650749856823166968850527296485588202270430832568539209738210376363912068348046527593712676598114275057725448074762994389716714228014972717990665655542719818865743339454183615030835830305139616518492695118602146815860665223808633176268571726593283988824607425355592984356868896869862580500515357846009974598198321288825579426658640907413002967841476067160478290202983314513163463038280660407527182823870960838051855993812507051491908668019398012912369456365762315666169554994191335426644692433453363187237190602132828961650920658565301500509193119884570874258737247485829216385618342486447844947213196238030134524983054770474053585023793978892577387526457918946588268929907828682326196633699156234581816413904872488728507925854813450176908651564852721569388770569930287248915922924411545263754812143287478042214444621065481406479398080621318844029545454028585176013489301113823710181485620874382318281857386837919920701890894625108803933176722069336461781683541422121086991647087652147284822317663570743148764774033648397327468021594942679125884694968969332204828731441754249021429349656598535609471052108614801685829269989700832755501489020128710656014006836216197987756444549633039680607736312406212588175898069500611632946947799529169692574582589750518632839394752980774225093724027495379809484034977200321903596844462615734329067608432549413707940871319890469393844963571407457377334877216772454033389084142676285806902637797488763353473466066822809210584101235225998953947938915377769021982654883558206998963272164596600775488971680387367538122344557413818621662406496247109991804531795100517797167063996878642683327979264223567699891665615713611009526299462126796985207245788716655650426218579366699329579858511381654502622302912582882684792066014962942240394597348645270782509718832951466433891090978541336254143585462500263461684042839507789587811204279710254993942025892945601695170644887563291515368274374063520835068832131167187474842828579719937909391112117195041857108857239562691726726702643007507039362605394535637097327713764222415485620341381540767233167644132826791926024203040667329421530740193677551474654993017450782648333444090222674585630983008186652924657628834644834897637100207827867875420310837070750573815531470530524180034731724332101031672890345603628559285019986137841041116709652804803139426628377299615430216027399519026044679350067886217467263524591015020531907048463208063488528312685913072745794836545662380385834140814999378490244024780995338812025730352455529676770358659547650249804283900011838368646509317431580951157376905474629063271169833948707893813039282816616907678052493544703900215285385058457677307599020083956655910704396742375774315427582021313456558410563793441233057058025144411029757612203569710672080779165668828168521289596761787397325681625660653192977888670246261911216399243662205739370770046372354374220936363897457898780405624443924814889011338090769117051737746754985734497557778663312693365179886144225951173871128084844040449803500491929332734754368318302430214497217975692931298990258323804620757034918404560366163840841072441000320675514835079247880064047869015630380157609814514040932220403437718337488877890778238494014391690425601864031323957135120027555082477063150459930701650780285384453388336077377121055338628377146981137889198842340869632742053906028770557341060336878653800814974615546968662362273290989476934259302767216729596126488039964396176141919113223267501056191536248753818366731367312406692903437617638932267581962930857165345963136810734198213936668088356741553219693881162677230424784997861243775211675433579854032330836888751373327882252412206557991081886624898878359998751193051401516964683179243936067892262188825401327072308716202362911256788799329857627698277770687149426001821663875726694661244747631721052410085430890409928740622334089217756542895671262253123936763801115074889013481254745081915197784943512915677779444963105849446755664215506395836894772469910086237687105421745977376920570771626733504599223542966841236247102370534036819088880218308209024050311536655793658337998790762606714155868286812188839118472616299802565927495745940284528240254386499939523999520596277132212186095070411570106538259855769470982656707461210562571490326926210620803834148878482972089601133163571013947112083955529981253879737966165303683790341165560024646236523972553574840278821681074979776329411205810819665855189239707931962605270727950974426698058627244400515066278396902584162744568736105207412135656010689766040282572939680172149257044340704829719879721687608258149965462252245080442931266857021277237131024139647963633885493260096879685394128359963116428519583664694934576569475325699821465842386691254697532097771873987978047504413838158748068968892215862983676173540273874534862001307752100536588688292828705851757447949714769417190412694714297744044392104416757585732254330156026932813617502416565242653469786940326257618448770059989525168485762655624921898046438254580859341751007212586827631643328947659711146404946502903000689636285194875198320579698491636549172232925641059923504741712671910317948432372246260690133335427497606680877732273639896378143626395326414086145095099723387892407262889953543012714369821734100784766656809866900137709949860411313062712660264910291639389982314499434721495889186429885229838000591785792876272266149104236799504939344487686719027471999185870696168236802471361046889013725705989453050875284762549547494087189359500841418426659486453916640');

    expect(solution('3,1000')).toBe('167668501');
    expect(solution('3,1000')).toStrictEqual(solution('1000,3'));
});

test('Problem input', () => {
    expect(solution(defaultInput)).toBe('137846528820');
});
