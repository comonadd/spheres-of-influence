import * as THREE from 'three';
import mapData from "./data/world.geo.json/countries.geo.json"
import { Vector2 } from 'three';
import workshopData from "./data/WorkshopUpload.extracted.json"
import _ from "lodash"


interface FrameData {
    w: number;
    h: number;
    x: number;
    y: number;
}

interface Frame {
    frame: FrameData;
}

export default class TextureAtlas {
    constructor(json: { frames: Record<string, Frame> }, image: HTMLImageElement) {
        this._textures = {};
        let texture = new THREE.Texture(image);
        texture.needsUpdate = true;

        let frames = json.frames;
        Object.keys(frames).forEach(function (key: any, i) {
            let frame: Frame = frames[key];
            let t = texture.clone();
            let data = frame.frame;
            t.repeat.set(data.w / image.width, data.h / image.height);
            t.offset.x = ((data.x) / image.width);
            t.offset.y = 1 - (data.h / image.height) - (data.y / image.height);
            t.needsUpdate = true;

            this._textures[key.replace('.png', '').toLowerCase()] = t;
        }, this);
    }

    get(id) {
        return this._textures[id];
    }
}

const provinceColors: Record<string, number> = {
    "AFG": 6048606,
    "AGO0": 11301067,
    "AGO1": 16662999,
    "ALB": 3804018,
    "ARE": 2478920,
    "ARG0": 1928250,
    "ARG1": 11031792,
    "ARM": 11133709,
    "ATA0": 840537,
    "ATA1": 10218370,
    "ATA2": 3525717,
    "ATA3": 14835002,
    "ATA4": 13354,
    "ATA5": 2073258,
    "ATA6": 7233116,
    "ATA7": 5241461,
    "ATF": 12865910,
    "AUS0": 8993952,
    "AUS1": 6769420,
    "AUT": 12501436,
    "AZE0": 682620,
    "AZE1": 11987336,
    "BDI": 5408447,
    "BEL": 12714907,
    "BEN": 1303718,
    "BFA": 5496304,
    "BGD": 13798602,
    "BGR": 2658352,
    "BHS0": 5366869,
    "BHS1": 5624875,
    "BHS2": 2814534,
    "BIH": 10501918,
    "BLR": 11551159,
    "BLZ": 5366379,
    "BMU": 9709894,
    "BOL": 13373600,
    "BRA": 12008653,
    "BRN": 7118791,
    "BTN": 5265508,
    "BWA": 10854608,
    "CAF": 16590032,
    "CAN0": 11038770,
    "CAN1": 4058525,
    "CAN2": 2223785,
    "CAN3": 3027618,
    "CAN4": 14521657,
    "CAN5": 6601276,
    "CAN6": 2580297,
    "CAN7": 3358057,
    "CAN8": 4599341,
    "CAN9": 5188608,
    "CAN10": 15929986,
    "CAN11": 3371150,
    "CAN12": 7362346,
    "CAN13": 9620231,
    "CAN14": 8359972,
    "CAN15": 454057,
    "CAN16": 5644362,
    "CAN17": 11456398,
    "CAN18": 201978,
    "CAN19": 12407012,
    "CAN20": 3701029,
    "CAN21": 16684272,
    "CAN22": 5028853,
    "CAN23": 2003018,
    "CAN24": 7517608,
    "CAN25": 804752,
    "CAN26": 7740901,
    "CAN27": 1006991,
    "CAN28": 8334096,
    "CAN29": 12013131,
    "CHE": 5286628,
    "CHL0": 3677254,
    "CHL1": 14999318,
    "CHN0": 14726679,
    "CHN1": 10336167,
    "CIV": 4557476,
    "CMR": 4634335,
    "COD": 12789947,
    "COG": 13182714,
    "COL": 7992211,
    "CRI": 10130601,
    "CUB": 12232522,
    "-99": 15318386,
    "CYP": 2140181,
    "CZE": 1052856,
    "DEU": 3614226,
    "DJI": 16701538,
    "DNK0": 11377186,
    "DNK1": 1145701,
    "DOM": 14648225,
    "DZA": 4417600,
    "ECU": 7290875,
    "EGY": 11493718,
    "ERI": 11973540,
    "ESP": 11020543,
    "EST": 15189917,
    "ETH": 4725831,
    "FIN": 16100880,
    "FJI0": 8352526,
    "FJI1": 7114518,
    "FJI2": 11992071,
    "FLK": 3392606,
    "FRA0": 14695814,
    "FRA1": 6224528,
    "GAB": 8381146,
    "GBR0": 15669397,
    "GBR1": 6026139,
    "GEO": 5739345,
    "GHA": 15349094,
    "GIN": 15197755,
    "GMB": 14182951,
    "GNB": 4093255,
    "GNQ": 16698778,
    "GRC0": 14890665,
    "GRC1": 345105,
    "GRL": 783041,
    "GTM": 4181750,
    "GUF": 5589511,
    "GUY": 8488485,
    "HND": 12349385,
    "HRV": 13561141,
    "HTI": 14353950,
    "HUN": 14721293,
    "IDN0": 11003053,
    "IDN1": 6383548,
    "IDN2": 10628391,
    "IDN3": 918168,
    "IDN4": 1521603,
    "IDN5": 13988828,
    "IDN6": 5619931,
    "IDN7": 4343279,
    "IDN8": 13786336,
    "IDN9": 9931762,
    "IDN10": 9824948,
    "IDN11": 6864975,
    "IDN12": 6430615,
    "IND": 361792,
    "IRL": 15246687,
    "IRN": 14236912,
    "IRQ": 9041615,
    "ISL": 13561051,
    "ISR": 803483,
    "ITA0": 13025004,
    "ITA1": 12975498,
    "ITA2": 10669252,
    "JAM": 3238199,
    "JOR": 3768512,
    "JPN0": 6692292,
    "JPN1": 16455311,
    "JPN2": 6216431,
    "KAZ": 16741967,
    "KEN": 3141535,
    "KGZ": 10141395,
    "KHM": 1750498,
    "KOR": 11750556,
    "CS-KM": 3059947,
    "KWT": 12724213,
    "LAO": 8821518,
    "LBN": 16077943,
    "LBR": 9301665,
    "LBY": 10179260,
    "LKA": 10925138,
    "LSO": 16312537,
    "LTU": 10251761,
    "LUX": 15174592,
    "LVA": 8646669,
    "MAR": 1462920,
    "MDA": 342363,
    "MDG": 15104338,
    "MEX": 8473084,
    "MKD": 3681384,
    "MLI": 2164924,
    "MLT0": 12824477,
    "MLT1": 10748072,
    "MMR": 4649652,
    "MNE": 12569467,
    "MNG": 14217428,
    "MOZ": 15997388,
    "MRT": 4209020,
    "MWI": 16273400,
    "MYS0": 3358935,
    "MYS1": 225555,
    "NAM": 8097410,
    "NCL": 7194967,
    "NER": 2093778,
    "NGA": 15130521,
    "NIC": 4137562,
    "NLD": 2498943,
    "NOR0": 3569110,
    "NOR1": 10174774,
    "NOR2": 10221512,
    "NOR3": 8777324,
    "NPL": 4706826,
    "NZL0": 287542,
    "NZL1": 14030717,
    "OMN0": 1890539,
    "OMN1": 9389943,
    "PAK": 10176947,
    "PAN": 8093432,
    "PER": 11751961,
    "PHL0": 14180401,
    "PHL1": 3974835,
    "PHL2": 15196038,
    "PHL3": 15256360,
    "PHL4": 12782906,
    "PHL5": 7933260,
    "PHL6": 10663786,
    "PNG0": 8122599,
    "PNG1": 2956490,
    "PNG2": 11924442,
    "PNG3": 107703,
    "POL": 10225331,
    "PRI": 11233458,
    "PRK": 12096108,
    "PRT": 1849203,
    "PRY": 15307002,
    "QAT": 12570000,
    "ROU": 10356460,
    "RUS0": 1449507,
    "RUS1": 13348494,
    "RUS2": 7591192,
    "RUS3": 543630,
    "RUS4": 4662698,
    "RUS5": 14455485,
    "RUS6": 2845902,
    "RUS7": 1125842,
    "RUS8": 11065133,
    "RUS9": 15212377,
    "RUS10": 11400076,
    "RUS11": 5715826,
    "RUS12": 4009194,
    "RWA": 10040029,
    "ESH": 1994968,
    "SAU": 3792515,
    "SDN": 5281150,
    "SSD": 16671478,
    "SEN": 3824822,
    "SLB0": 11161484,
    "SLB1": 13891443,
    "SLB2": 14512292,
    "SLB3": 11407347,
    "SLB4": 13429129,
    "SLE": 10669884,
    "SLV": 7709307,
    "SOM": 11788614,
    "SRB": 6806544,
    "SUR": 3688082,
    "SVK": 15073547,
    "SVN": 12805798,
    "SWE0": 11610873,
    "SWE1": 3285348,
    "SWE2": 3828904,
    "SWE3": 971317,
    "SWZ": 6480593,
    "SYR": 3220965,
    "TCD": 2322138,
    "TGO": 15168240,
    "THA": 9466927,
    "TJK": 12720120,
    "TKM": 4083314,
    "TLS": 8996672,
    "TTO": 11551262,
    "TUN": 1112937,
    "TUR0": 7314060,
    "TUR1": 12158523,
    "TWN": 6714955,
    "TZA": 10193654,
    "UGA": 9618748,
    "UKR": 14990097,
    "URY": 5448705,
    "USA0": 2268136,
    "USA1": 8094825,
    "USA2": 14714877,
    "USA3": 10850449,
    "USA4": 3756551,
    "USA5": 7060185,
    "USA6": 13276338,
    "USA7": 11123096,
    "USA8": 1696046,
    "USA9": 2197286,
    "UZB": 9397773,
    "VEN": 13591339,
    "VNM": 6615098,
    "VUT0": 10490495,
    "VUT1": 4729254,
    "PSE": 15112374,
    "YEM": 2591659,
    "ZAF": 7839192,
    "ZMB": 3665081,
    "ZWE": 6145150
}

let container;
let camera: any;
let scene: THREE.Scene;
let raycaster: THREE.Raycaster;
let renderer: THREE.WebGLRenderer;

const pointer = new THREE.Vector2();
const frustumSize = 1000;
const K = 25

const randomColor = () => {
    return Math.round(Math.random() * 0xffffff)
}

interface Province {
    mesh: any;
    name: string;
    vertices: any[]
    dirty: boolean;
    color: number;
    faction: Faction | null;
}

type ProvincesDirectory = Record<string, Province>;

interface Card {
    name: string;
    sprite: THREE.Sprite;
}

type CardDirectory = Record<CardId, Card>

interface State {
    provinces: ProvincesDirectory;
    selectedProvince: Province | null;
    cardDirectory: CardDirectory;
}

const isProvinceHovered = (province: Province) => hoveredProvinceId === province.name

export function changeColorLightness(color: number, lightness: number): number {
    const r = (color & 0xFF0000) / 0x10 ** 4;
    const g = (color & 0x00FF00) / 0x10 ** 2;
    const b = (color & 0x0000FF);

    const changedR = Math.max(0, Math.min(r + lightness, 0xFF));
    const changedG = Math.max(0, Math.min(g + lightness, 0xFF));
    const changedB = Math.max(0, Math.min(b + lightness, 0xFF));

    return (changedR * 0x10 ** 4) + (changedG * 0x10 ** 2) + changedB;
}

interface Faction {
    color: number;
    name: string;
}

const enum FactionColors {
    Green = 0x01644A
}

const factions: Record<string, Faction> = {
    "dmitrii": {
        color: FactionColors.Green,
        name: "dmitrii"
    },

}

const createProvinceMesh = (scene: any, province: Province) => {
    const { vertices, name } = province
    const hover = isProvinceHovered(province)
    const selected = state?.selectedProvince === province

    let color = province.color;
    if (selected) {
        color = changeColorLightness(province.color, -50);
    } else if (hover) {
        color = changeColorLightness(province.color, 25);
    }

    const points: Vector2[] = vertices.map(a => {
        return new Vector2(a[0] / K, a[1] / K)
    })
    var geometry = new THREE.ShapeBufferGeometry(new THREE.Shape(points));
    const material = new THREE.MeshBasicMaterial({ color: color });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.name = name
    return mesh
}

const printColorMap = () => {
    console.log(Object.values(state.provinces).reduce((acc, p) => {
        acc[p.name] = p.color;
        return acc
    }, {} as any))
}

const reset = () => {
    state = loadInitialState()
    printColorMap()
}

const loadInitialState = async (): Promise<State> => {
    const provinces: Province[] = [];

    const addProvince = (name: string, vertices: any[]) => {
        let province: Province = {
            mesh: null,
            name,
            color: provinceColors[name],
            vertices,
            dirty: false,
            faction: null,
        }
        const mesh = createProvinceMesh(scene, province)
        province.mesh = mesh
        provinces.push(province)
    }

    for (const feature of mapData.features) {
        const type = feature.geometry.type
        switch (type) {
            case "Polygon": {
                addProvince(feature.id, feature.geometry.coordinates[0])
            } break;
            case "MultiPolygon": {
                let idx = 0
                for (let part of feature.geometry.coordinates) {
                    // TODO: this suffix is for identifying separate parts of a single multi polygon
                    // should probably do something about it
                    addProvince(feature.id + idx, part[0])
                    ++idx
                }
            } break;
            default: {
                console.warn(`Unhandled geometry type: ${type}`);
            } break;
        }
    }

    return {
        selectedProvince: null,
        provinces: provinces.reduce((acc, p) => {
            acc[p.name] = p
            return acc;
        }, {} as ProvincesDirectory),
        cardDirectory: await loadCards(),
    }
}

let state: State;

const getCurrentlyHovered = (): Province | null => {
    return hoveredProvinceId ? state.provinces[hoveredProvinceId] : null
}

const INNER_CARD_WIDTH = 493
const CARD_WIDTH_FULL = 532
const CARD_HEIGHT_FULL = 752
const OUTER_MARGIN_X = 16
const OUTER_MARGIN_Y = 16
const INNER_PADDING_X = 26
const INNER_PADDING_Y = 24

const enum CardId {
    EnergySector = "energy_sector",
    HeavyArmor = "heavy_armor",
    ICBM = "icbm",
    Infrastructure = "infrastructure",
}

interface CardLoadInfo {
    name: CardId,
    x: number,
    y: number,
}

const cardActions: Partial<Record<CardId, () => void>> = {
    [CardId.ICBM]: () => {
        console.log("doing icbm");
    },
}

interface Deck {
    width: number,
    height: number,
    imageUrl: string,
    cards: CardLoadInfo[]
}

const decks: Deck[] = [
    {
        imageUrl: "./src/data/face_cards.png",
        width: 8,
        height: 4,
        cards: [
            {
                name: CardId.EnergySector, x: 0, y: 0
            },
            {
                name: CardId.HeavyArmor, x: 1, y: 0
            },
            {
                name: CardId.ICBM, x: 4, y: 0
            },
            {
                name: CardId.Infrastructure, x: 6, y: 0
            },
        ]

    },
    {
        imageUrl:
            "./src/data/face_cards_2.png",
        width: 8,
        height: 5,
        cards: [],
    },
]

const loadCards = async (): Promise<CardDirectory> => {
    console.log("loading cards");
    const promises: Promise<Card[]>[] = []

    for (const { imageUrl, cards, } of decks) {
        const img = new Image()
        img.src = imageUrl

        const offsetFor = (idxX: number, idxY: number): { x: number, y: number } => {
            const offsetXPerItem = CARD_WIDTH_FULL + INNER_PADDING_X
            const offsetYPerItem = CARD_HEIGHT_FULL + INNER_PADDING_Y
            let x = OUTER_MARGIN_X + (idxX * offsetXPerItem);
            let y = OUTER_MARGIN_Y + (idxY * offsetYPerItem);
            return {
                x, y
            }
        }

        const cardFrames = cards.reduce((fr, card) => {
            fr[card.name] = {
                frame: {
                    w: CARD_WIDTH_FULL,
                    h: CARD_HEIGHT_FULL,
                    ...offsetFor(card.x, card.y)
                }
            }
            return fr
        }, {} as Record<CardId, Frame>);

        promises.push(new Promise<Card>((resolve) => {
            img.onload = () => {
                var map = new TextureAtlas({ frames: cardFrames }, img)
                let x = -0.3
                let y = 2.45
                const deckCards: Card[] = []
                for (const [cardName, cardFrame] of Object.entries(cardFrames)) {
                    var material = new THREE.SpriteMaterial({
                        map: map.get(cardName),
                        color: 0xffffff
                    });
                    var sprite = new THREE.Sprite(material);
                    sprite.name = `card_${cardName}`
                    sprite.scale.set(1, CARD_HEIGHT_FULL / CARD_WIDTH_FULL, 1);
                    sprite.position.set(x, y, 0)
                    x += 1.1
                    const card: Card = { sprite, name: cardName }
                    deckCards.push(card)
                }
                resolve(deckCards)
            }
        }))
    }

    const cardList = await Promise.all(promises)
    return cardList.reduce((acc, cards) => {
        for (const card of cards) {
            acc[card.name] = card;
        }
        return acc;
    }, {} as CardDirectory)
}

const renderMap = () => {
    for (const province of Object.values(state.provinces)) {
        scene.add(province.mesh);
    }
}

const renderAllCards = () => {
    console.log(state.cardDirectory);
    for (const card of Object.values(state.cardDirectory)) {
        scene.add(card.sprite);
    }
}

const init = async () => {
    console.log("init");
    raycaster = new THREE.Raycaster();

    container = document.createElement('div');
    document.body.appendChild(container);

    // camera = new THREE.OrthographicCamera(frustumSize * aspect / - 2, frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 1, 1000);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

    camera.position.set(1.6, 1.7, 2)

    scene = new THREE.Scene();
    state = await loadInitialState()
    renderMap();
    renderAllCards();

    // scene.background = new THREE.Color(0xf0f0f0);

    // const light = new THREE.DirectionalLight(0xffffff, 1);
    // light.position.set(1, 1, 1).normalize();
    // scene.add(light);

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "r") {
            reset()
        }
    }

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('click', (ev) => {
        const province = getCurrentlyHovered();
        if (province === null) {
            // deselect
            state.selectedProvince = null
            return
        }
        if (state.selectedProvince) {
            state.selectedProvince.dirty = true
        }
        state.selectedProvince = province
        province.dirty = true
    });
    window.addEventListener('resize', onWindowResize);
}

const onWindowResize = () => {
    const aspect = window.innerWidth / window.innerHeight;

    camera.left = - frustumSize * aspect / 2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = - frustumSize / 2;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

const onPointerMove = (event: any) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = - (event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

let hoveredProvinceId: string | null = null

const render = () => {
    raycaster.setFromCamera(pointer.clone(), camera);

    // hover provinces
    const objects = raycaster.intersectObjects(scene.children);
    let currentlyHovering: Province | null = null
    for (const object of objects) {
        const obj = object.object;
        const name = obj.name
        console.log(obj)
        const province = state.provinces[name]
        currentlyHovering = province
    }
    if (hoveredProvinceId !== null && (currentlyHovering?.name !== hoveredProvinceId)) {
        // if previolsly hovered something and currently not hovering that same thing, reset that thing
        state.provinces[hoveredProvinceId].dirty = true
    }
    if (currentlyHovering && hoveredProvinceId !== currentlyHovering.name) {
        currentlyHovering.dirty = true
        hoveredProvinceId = currentlyHovering.name
    }
    if (currentlyHovering === null) {
        hoveredProvinceId = null
    }

    const provincesList = Object.values(state.provinces)

    for (const province of provincesList) {
        if (province.dirty) {
            console.log("re-rendering", province.name)
            // needs to be rerendered
            scene.remove(province.mesh)
            const mesh = createProvinceMesh(scene, province)
            scene.add(mesh)
            province.dirty = false
        }
    }

    renderer.render(scene, camera);
}

const main = async () => {
    await init();
    animate();
}

main();
