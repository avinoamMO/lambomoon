// let orderbook = {
//   asks: [
//     [32675.17, 0.2292],
//     [33042.75, 0.22833742],
//     [33050, 0.24160297],
//     [33433.26, 2.10597292],
//     [33433.27, 1.04717002],
//     [33451, 0.08823099],
//     [33550, 0.04116934],
//     [33700, 1.4],
//     [33800, 0.02071006],
//     [33999.97, 0.29788315],
//     [34000, 0.80795623],
//     [34300, 0.12662473],
//     [34500, 0.01685522],
//     [34780, 0.13891972],
//     [34893, 0.065],
//     [34897, 0.114467],
//     [34990, 0.46642949],
//     [34999, 0.008],
//     [35000, 0.7060564],
//     [35100, 0.1],
//     [35200, 0.4],
//     [35354, 1],
//     [35400, 0.4],
//     [35500, 0.08579126],
//     [35565, 0.01284971],
//     [35600, 0.6],
//     [35621, 0.02969727],
//     [35799, 0.006],
//     [35800, 0.19928847],
//     [35900, 0.1],
//     [36000, 1.51150614],
//     [36100, 0.02797784],
//     [36121, 0.02768473],
//     [36400, 1.11904736],
//     [36500, 0.50557928],
//     [36995, 0.30060451],
//     [37000, 0.55831812],
//     [37100.02, 0.00808625],
//     [37499, 0.008],
//     [37500, 0.70437872],
//     [37792, 0.07938188],
//     [38000, 0.91844919],
//     [38220, 0.1],
//     [38452, 0.03900967],
//     [38500, 0.84516312],
//     [38800, 0.1],
//     [39000, 0.85167955],
//     [39100, 0.05115446],
//     [39500, 0.00139241],
//     [39700, 0.2],
//     [39876, 0.06328125],
//     [40000, 0.7080778],
//     [40400, 0.2],
//     [40500, 0.02135802],
//     [40600, 0.0810654],
//     [40850, 0.01609565],
//     [41000, 0.30125099],
//     [41212, 1],
//     [41350, 0.00637557],
//     [41389, 0.01882317],
//     [41398, 0.3],
//     [41500, 0.01713727],
//     [41700, 0.2],
//     [42000, 1.03159982],
//     [42123, 0.02109375],
//     [42700, 0.4976652],
//     [43000, 0.00260669],
//     [43231, 0.7],
//     [43430, 0.07],
//     [44000, 0.20681818],
//     [44552, 1],
//     [45000, 0.50400423],
//     [45012, 0.3],
//     [45900, 0.97955944],
//     [46000, 0.02402219],
//     [46374, 0.10781904],
//     [47000, 0.1],
//     [48000, 0.02323408],
//     [48613, 0.01035824],
//     [50000, 0.44415556],
//     [50400, 0.97955945],
//     [52000, 0.00617556],
//     [52032, 0.1],
//     [53000, 0.1],
//     [55000, 0.00926334],
//     [56000, 0.11446282],
//     [60000, 0.06524795],
//     [62123, 0.25],
//     [64321, 1],
//     [76432, 1],
//     [78799, 2],
//     [88999.99, 4],
//     [97897, 5],
//     [99999, 0.4],
//     [100000, 0.08534953],
//     [133700, 3],
//     [169000, 4.0904413],
//     [222222, 0.25],
//     [251500, 0.03929795],
//     [340000, 0.48],
//     [649847, 0.0035471],
//     [750000, 0.39444417],
//     [800000, 0.00532065],
//     [952021.03, 1.33163716],
//     [1510101.01, 0.99872787],
//     [15101010.01, 0.33290929]
//   ],
//   bids: [
//     [31600, 0.00218354],
//     [31483.51, 0.0541],
//     [31483.5, 0.28437833],
//     [31407.31, 0.63679442],
//     [31400, 0.75325723],
//     [31017.74, 1.59093999],
//     [31017.73, 0.77564221],
//     [31011.82, 0.75719339],
//     [31007.89, 0.01011559],
//     [31005.91, 0.7640312],
//     [31000, 0.28449616],
//     [30650, 0.01],
//     [30600, 0.01],
//     [30267, 0.00036343],
//     [30266, 0.00036344],
//     [30260, 0.00036352],
//     [30255, 0.00036358],
//     [30230, 0.00036388],
//     [30222, 0.00036397],
//     [30150, 0.00036484],
//     [30100, 0.00036545],
//     [30050, 0.00036606],
//     [30000, 0.01371156],
//     [29701.01, 0.0833305],
//     [29500, 0.34059898],
//     [29415, 0.12146864],
//     [29387, 0.055558],
//     [29000, 2.78442545],
//     [28715, 0.34634421],
//     [28700, 1.03494669],
//     [28160, 0.00035866],
//     [28150, 0.03552398],
//     [28000, 0.53027086],
//     [27600, 0.14],
//     [27501.9, 0.07272225],
//     [27400, 0.2],
//     [27350, 0.08236358],
//     [27303, 0.01008403],
//     [27013.81, 0.00663942],
//     [27010, 0.1],
//     [27002.52, 0.07406716],
//     [27000, 1.17782381],
//     [26903, 0.01762346],
//     [26879.99, 0.18601197],
//     [26600, 1.61140729],
//     [26500, 0.00754717],
//     [26450, 0.04346329],
//     [26273, 0.01804586],
//     [26101, 0.00383127],
//     [26100, 1.692171],
//     [26050, 3.39083808],
//     [26013.81, 0.00689465],
//     [26005.9, 0.00653356],
//     [26000, 1.63656357],
//     [25951, 0.01],
//     [25950, 3],
//     [25800, 4],
//     [25720, 3.005],
//     [25700, 3],
//     [25500, 0.03882741],
//     [25440, 0.14445755],
//     [25400, 0.2],
//     [25301, 0.01],
//     [25200.02, 0.19642842],
//     [25200, 1],
//     [25100, 5.4038247],
//     [25008, 0.00667786],
//     [25000.01, 0.00040019],
//     [25000, 1.22008872],
//     [24900, 1.03140124],
//     [24887.46, 0.04018088],
//     [24820, 0.14086732],
//     [24800, 0.01],
//     [24650, 3],
//     [24550, 0.09005181],
//     [24510, 0.03300008],
//     [24500, 5],
//     [24341.11, 0.00041494],
//     [24300, 0.011],
//     [24001, 0.1],
//     [24000, 5.05535975],
//     [23900, 10],
//     [23861, 0.8],
//     [23850, 3],
//     [23800, 0.011],
//     [23689, 0.08231669],
//     [23500, 0.06543081],
//     [23396.55, 0.99870566],
//     [23200, 0.02155172],
//     [23160, 0.00274482],
//     [23154, 0.01943509],
//     [23100, 0.03333333],
//     [23001, 0.1],
//     [23000, 3.07037622],
//     [22963, 0.03217615],
//     [22900, 5],
//     [22829, 0.21533536],
//     [22700, 0.09427313],
//     [22600, 0.03318584],
//     [22500, 0.00044889],
//     [22314, 0.01491803],
//     [22200, 0.09009009],
//     [22160, 0.07],
//     [22154.69, 0.011],
//     [22134.33, 0.001],
//     [22123, 0.04520183],
//     [22100, 0.37573539],
//     [22008.03, 0.27630192],
//     [22008, 0.2249407],
//     [22000.01, 0.022],
//     [22000, 0.62049412],
//     [21823, 0.01525368],
//     [21801.01, 0.2270537],
//     [21800, 0.2146789],
//     [21400, 0.02314173],
//     [21300, 0.7],
//     [21213, 0.00754254],
//     [21060, 0.04748338],
//     [21007, 0.00761651],
//     [21000, 0.097849],
//     [20750, 0.00771084],
//     [20650, 0.04795913],
//     [20500, 0.005],
//     [20200, 0.055075],
//     [20100, 0.28617607],
//     [20050, 0.01620504],
//     [20010, 0.03241849],
//     [20001, 0.06637218],
//     [20000, 0.4013367],
//     [19990, 0.25012506],
//     [19916, 0.14837392],
//     [19900, 0.05364246],
//     [19850, 0.00806045],
//     [19602, 0.04591368],
//     [19600, 0.04202867],
//     [19568, 0.04472348],
//     [19520, 0.05],
//     [19500, 0.32315307],
//     [19400.03, 0.223211],
//     [19250, 0.05],
//     [19200, 0.02860302],
//     [19191, 0.21140118],
//     [19111, 0.32095531],
//     [19005, 0.008],
//     [19000, 0.11],
//     [18823, 0.0212506],
//     [18800, 0.007],
//     [18500, 0.02702703],
//     [18400, 0.10869565],
//     [18333, 0.38182512],
//     [18200, 0.10075616],
//     [18171.11, 0.2],
//     [18123, 0.08276775],
//     [18100, 0.02],
//     [18050, 0.23037584],
//     [18000, 0.09863423],
//     [17999, 0.27773765],
//     [17820, 0.08],
//     [17760, 0.00563063],
//     [17555, 0.37178297],
//     [17500.03, 0.08248192],
//     [17500, 0.05],
//     [17421, 0.04557833],
//     [17221, 0.02322745],
//     [17100, 0.07],
//     [17000, 0.45535676],
//     [16848, 1.42450142],
//     [16800, 0.05],
//     [16750, 0.08684734],
//     [16500, 0.13488691],
//     [16258, 0.04613114],
//     [16200, 0.42782056],
//     [16100, 0.05],
//     [16050.03, 0.01637256],
//     [16033, 0.015],
//     [16000, 0.55341831],
//     [15916, 0.18566317],
//     [15900, 1.55591881],
//     [15650, 0.03194888],
//     [15641, 0.03507704],
//     [15250, 0.3882162],
//     [15000, 5.7269942],
//     [14700, 0.31853878],
//     [14600, 0.06849315],
//     [14582, 0.01371554],
//     [14500, 0.17070738],
//     [14397.45, 0.16036923],
//     [14112, 0.01823951],
//     [14000, 0.56301836],
//     [13613, 0.01469184],
//     [13500, 0.00074148],
//     [13400, 0.1066791],
//     [13300, 0.05],
//     [13000, 4.00372585],
//     [12365, 0.2],
//     [12070, 0.20515],
//     [12000, 0.65532409],
//     [11916, 0.24798716],
//     [11200, 0.18240625],
//     [11080, 0.27075812],
//     [11031, 0.04532681],
//     [10900.03, 0.0361621],
//     [10800, 0.24688667],
//     [10500, 0.1452381],
//     [10450, 0.99436258],
//     [10323, 0.18921796],
//     [10290, 0.11661808],
//     [10142, 0.07394991],
//     [10009, 0.1],
//     [10000, 0.201001],
//     [9800, 0.05],
//     [9789, 0.07862233],
//     [9470, 0.5279831],
//     [8121, 0.05864278],
//     [8000, 0.111745],
//     [7916, 0.37329459],
//     [7500, 1.320132],
//     [7200, 0.37033],
//     [7100, 0.279],
//     [7000, 0.71694285],
//     [6700, 8],
//     [6555, 0.93647811],
//     [5300, 0.2804],
//     [5113, 0.09314258],
//     [5000, 0.4],
//     [3666, 0.05455537],
//     [3540, 0.5445322],
//     [2000, 2],
//     [1801, 0.55524708],
//     [1590, 1],
//     [1017, 15],
//     [1000, 3],
//     [533, 0.9380863],
//     [450, 6],
//     [117, 50],
//     [50, 1.33664],
//     [27.14, 73.69196758],
//     [10, 2],
//     [1.22, 32.78688525]
//   ]
// };

export const calcRoiFromBook = (amount, orderBook, buyOrSell) => {
  let i = 0;
  let current_balance_nis = amount;
  let current_balance_crypto = 0;
  // let orderRate = orderBook.asks[i][0];
  let order_total_crypto_offered = orderBook.asks[i][1];
  let order_total_price_nis = orderBook.asks[i][0] * orderBook.asks[i][1];
  let order_partial_return_crypto = 0;

  while (current_balance_nis > 0) {
    if (current_balance_nis >= order_total_price_nis) {
      current_balance_crypto += order_total_crypto_offered;
      current_balance_nis -= order_total_price_nis;
      // console.log(
      //   `Acquired ${order_total_crypto_offered}BTC for ${order_total_price_nis}NIS.\n
      //    Budget remaining: ${current_balance_nis}NIS \n
      //    Total expected return in crypto: ${current_balance_crypto}`
      // );
    }

    if (current_balance_nis < order_total_price_nis)
      if (current_balance_nis > 0) {
        order_partial_return_crypto =
          (current_balance_nis / order_total_price_nis) *
          order_total_crypto_offered;
        current_balance_nis = 0;
        current_balance_crypto += order_partial_return_crypto;
        // console.log(
        //   `Partially acquired ${order_partial_return_crypto}BTC for ${order_total_price_nis}NIS.\n
        //  Budget remaining: ${current_balance_nis}NIS \n
        //  Total expected return in crypto: ${current_balance_crypto}`
        // );
      }

    i++;
  }
  // console.log(`Procurement ended after ${
  //   i + 1
  // } orders full or partial fulfillment \n 
  //   Sum left in NIS: ${current_balance_nis} \n 
  //   Crypto acquired: ${current_balance_crypto} \n 
  //   Total spent: ${amount}NIS`);
  return (current_balance_crypto).toFixed(8);
};
