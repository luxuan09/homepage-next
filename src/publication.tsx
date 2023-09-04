import * as React from 'react';

class Publication {
  static readonly me = 'Xuan Lu';

  constructor(
    readonly label: string,
    readonly authors: string[],
    readonly title: string,
    readonly conference: string,
    readonly year: number,
    readonly link: string,
    readonly toAppear: boolean = false,
    readonly bestFullPaper: boolean = false,
    readonly hasPodcaseLink: boolean = false) { }
}

export const publications: Publication[] = [
  new Publication(
  'j12',
  ['Fuqi Lin', 'Xuan Lu', 'Wei Ai', 'Huoran Li', 'Yun Ma', 'Yulian Yang', 'Hongfei Deng', 'Qingxiang Wang', 'Qiaozhu Mei', 'Xuanzhe Liu'],
  'Adoption of Recurrent Innovations: A Large-Scale Case Study on Mobile App Updates',
  'Transactions on the Web (TWEB)',
  2023,
  '',
  true),
  new Publication(
  'c16',
  ['Yuhang Zhou', 'Xuan Lu', 'Ge Gao', 'Qiaozhu Mei', 'Wei Ai'],
  'Emoji Promotes Developer Participation and Issue Resolution on GitHub',
  'In Proceedings of the 18th International AAAI Conference on Web and Social Media (ICWSM\'24)',
  2024,
  '',
  true),
  new Publication(
    'c15',
    ['Yawen Guo', 'Rachael Zehrung', 'Katherine Genuario', 'Xuan Lu', 'Qiaozhu Mei', 'Yunan Chen', 'Kai Zheng'],
    'Perspectives on Privacy in the Post-Roe Era: A Mixed-Methods of Machine Learning and Qualitative Analyses of Tweets',
    'In AMIA Annual Symposium Proceedings',
    2023,
    '',
    true),
  new Publication(
    'c14',
    ['Xuan Lu', 'Wei Ai', 'Yixin Wang', 'Qiaozhu Mei'],
    'Team Resilience under Shock: An Empirical Analysis of GitHub Repositories during Early COVID-19 Pandemic',
    'In Proceedings of the 17th International AAAI Conference on Web and Social Media (ICWSM\'23), Vol. 17, pp. 578-589',
    2022,
    'https://arxiv.org/pdf/2301.12326.pdf'),
  new Publication(
    'j11',
    ['Xuan Lu', 'Wei Ai', 'Zhenpeng Chen', 'Yanbin Cao', 'Qiaozhu Mei'],
    'Emojis predict dropouts of remote workers: An empirical study of emoji usage on GitHub',
    'PloS one, 2022, 17(1):e0261262',
    2022,
    'https://arxiv.org/pdf/2102.05737.pdf',
    false,
    false,
    true /* podcase link */),
  new Publication(
    'j10',
    ['Huoran Li', 'Fuqi Lin', 'Xuan Lu', 'Chenren Xu', 'Gang Huang', 'Jun Zhang', 'Qiaozhu Mei', 'Xuanzhe Liu'],
    'Systematic Analysis of Fine-Grained Mobility Prediction with On-Device Contextual Data',
    'IEEE Transactions on Mobile Computing (TMC\'22), 2022, 21(3): 1096-1109',
    2022,
    'https://ieeexplore.ieee.org/abstract/document/9165195'),
  new Publication(
    'j9',
    ['Xiaoling Xiang', 'Xuan Lu', 'Alex Halavanau', 'Jia Xue', 'Yihang Sun', 'Patrick Ho Lam Lai', 'Zhenke Wu'],
    'Modern Senicide in the Face of a Pandemic: An Examination of Public Discourse and Sentiment about Older Adults and COVID-19 Using Machine Learning',
    'The Journals of Gerontology: Series B. 2021 Apr;76(4):e190-200',
    2021,
    'https://academic.oup.com/psychsocgerontology/article-pdf/76/4/e190/36594784/gbaa128.pdf'),
  new Publication(
    'j8',
    ['Zhenpeng Chen', 'Yanbin Cao', 'Huihan Yao', 'Xuan Lu', 'Xin Peng', 'Hong Mei', 'Xuanzhe Liu'],
    'Emoji-Powered Sentiment and Emotion Detection from Software Developers’ Communication Data',
    'ACM Transactions on Software Engineering and Methodology (TOSEM\'21), 2021, 30(2): 1-48',
    2021,
    'https://chenzhenpeng18.github.io/papers/tosem20.pdf'),
  new Publication(
    'c13',
    ['Shuyu Zheng', 'Fuqi Lin', 'Xuan Lu', 'Yulian Yang', 'Hongfei Deng', 'Jun Zhang', 'Yun Ma', 'Xuanzhe Liu'],
    'Characterizing Service Access Patterns under Heterogeneous Clients',
    '2020 IEEE International Conference on Services Computing (SCC), pp.57-59, 2020',
    2020,
    'https://luckyfq.github.io/pdfs/SCC%2020.pdf'),
  new Publication(
    'j7',
    ['Xiaoling Xiang', 'Xuan Lu', 'Alex Halavanau', 'Jia Xue', 'Yihang Sun', 'Patrick Ho Lam Lai', 'Zhenke Wu'],
    'Modern Ubasute: Public Discourse and Sentiment about Older Adults and COVID19 Using Machine Learning',
    'Innovation in Aging.2020; 4(Suppl 1):952',
    2020,
    'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7740428/pdf/igaa057.3485.pdf'),
  new Publication(
    'c12',
    ['Zhenpeng Chen', 'Sheng Shen', 'Ziniu Hu', 'Xuan Lu', 'Qiaozhu Mei', 'Xuanzhe Liu'],
    'Emoji-Powered Representation Learning for Cross-Lingual Sentiment Classification (Extended Abstract)',
    'In Proceedings of The 29th International Joint Conference on Artificial Intelligence (IJCAI\'20), pp.4701-4705, Yokohama, Japan, July 11-17, 2020.(Invited paper, an abridged version of our WWW\'19 paper)',
    2020,
    'https://arxiv.org/pdf/1806.02557'),
  new Publication(
    'c11',
    ['Zhenpeng Chen', 'Yanbin Cao', 'Xuan Lu', 'Qiaozhu Mei', 'Xuanzhe Liu'],
    'SEntiMoji: An Emoji-Powered Learning Approach for Sentiment Analysis in Software Engineering',
    'In Proceedings of the 27th ACM Joint Meeting on European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE\'19), pp.841-852, Tallinn, Estonia, Aug.26-30, 2019',
    2019,
    'https://arxiv.org/pdf/1907.02202'),
  new Publication(
    'c10',
    ['Zhenpeng Chen', 'Sheng Shen', 'Ziniu Hu', 'Xuan Lu', 'Qiaozhu Mei', 'Xuanzhe Liu'],
    'Emoji-Powered Representation Learning for Cross-Lingual Sentiment Classification',
    'In Proceedings of the Web Conference 2019 (WWW\'19), pp.251-262, San Francisco, USA, May 13-17, 2019',
    2019,
    'https://arxiv.org/pdf/1806.02557',
    false,
    true /* best full paper */),
  new Publication(
    'j6',
    ['Gang Huang', 'Xuanzhe Liu', 'Yun Ma', 'Xuan Lu', 'Ying Zhang', 'Yingfei Xiong'],
    'Programming Situational Mobile Web Applications with Cloud-Mobile Convergence: An Internetware-Oriented Approach',
    'IEEE Transactions on Services Computing (TSC\'19), 2019, 12(1):6-19',
    2019,
    'https://ieeexplore.ieee.org/abstract/document/7505652'),
  new Publication(
    'c9',
    ['Zhenpeng Chen', 'Xuan Lu', 'Wei Ai', 'Huoran Li', 'Qiaozhu Mei', 'Xuanzhe Liu'],
    'Through a Gender Lens: Learning Usage Patterns of Emojis from Large-Scale Android Users',
    'In Proceedings of the Web Conference 2018 (WWW\'18), pp.763-772, Lyon, France, Apr.23-27, 2018',
    2018,
    'https://dl.acm.org/doi/pdf/10.1145/3178876.3186157'),
  new Publication(
    'j5',
    ['Lili Wei', 'Yepang Liu', 'Shing-Chi Cheung', 'Huaxun Huang', 'Xuan Lu', 'Xuanzhe Liu'],
    'Understanding and detecting fragmentation-induced compatibility issues for android apps',
    'IEEE Transactions on Software Engineering (TSE\'18), 2018',
    2018,
    'http://castle.cse.ust.hk/castle/publication/materials/TSE19-lili.pdf'),
  new Publication(
    'j4',
    ['Xuanzhe Liu', 'Huoran Li', 'Xuan Lu', 'Tao Xie', 'Qiaozhu Mei', 'Feng Feng', 'Hong Mei'],
    'Understanding Diverse Usage Patterns from Large-Scale Appstore-Service Profiles',
    'IEEE Transactions on Software Engineering (TSE\'18), 2018, 44(4):384-411',
    2018,
    'https://ieeexplore.ieee.org/iel7/32/4359463/07883939.pdf'),
  new Publication(
    'j3',
    ['Zhenpeng Chen', 'Xuan Lu', 'Huoran Li', 'Xuanzhe Liu'],
    'User Preferences Prediction Based on Multidimensional Features of Apps',
    'Journal of Frontiers of Computer Science and Technology, 2017, 11(9):1405-1417',
    2017,
    'http://fcst.ceaj.org/EN/abstract/abstract1376.shtml'),
  new Publication(
    'c8',
    ['Sheng Shen', 'Xuan Lu', 'Ziniu Hu', 'Xuanzhe Liu'],
    'Towards Release Strategy Optimization for Apps in Google Play',
    'In Proceedings of the Ninth Asia-Pacific Symposium on Internetware (Internetware\'17)',
    2017,
    'https://arxiv.org/pdf/1707.06022'),
  new Publication(
    'c7',
    ['Xuan Lu', 'Zhenpeng Chen', 'Xuanzhe Liu', 'Huoran Li', 'Tao Xie', 'Qiaozhu Mei'],
    'PRADO: Predicting App Adoption by Learning the Correlation between Developer-Controllable Properties and User Behaviors',
    'In Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (invited to present on the 2017 ACM International Joint Conference on Pervasive and Ubiquitous Computing, UbiComp\'17), September 2017, 1(3):79:1--79:30',
    2017,
    'https://dl.acm.org/doi/pdf/10.1145/3130944'),
  new Publication(
    'c6',
    ['Wei Ai', 'Xuan Lu', 'Xuanzhe Liu', 'Ning Wang', 'Gang Huang', 'Qiaozhu Mei'],
    'Untangling Emoji Popularity through Semantic Embeddings',
    'In Proceedings of the 11th International AAAI Conference on Web and Social Media (ICWSM\'17), pp.2-11, Montreal, Canada, May 15-18, 2017',
    2017,
    'https://ojs.aaai.org/index.php/ICWSM/article/download/14903/14753'),
  new Publication(
    'c5',
    ['Xuan Lu', 'Wei Ai', 'Xuanzhe Liu', 'Qian Li', 'Qiaozhu Mei', 'Ning Wang', 'Gang Huang'],
    'Learning from the Ubiquitous Language: An Empirical Analysis of Emoji Usage of Smartphone Users',
    'In Proceedings of the 2016 ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp\'16), pp.770-780, Heidelberg, Germany, Sep.12-16, 2016',
    2016,
    'https://dl.acm.org/doi/pdf/10.1145/2971648.2971724'),
  new Publication(
    'c4',
    ['Xuan Lu', 'Xuanzhe Liu', 'Huoran Li', 'Tao Xie', 'Dan Hao', 'Qiaozhu Mei', 'Gang Huang', 'Feng Feng'],
    'Mining Usage Data from Large-Scale Android Users: Challenges and Opportunities',
    'In Proceedings of the 3rd ACM International Conference on Mobile Software Engineering and Systems (MobileSoft\'16), pp.301-302, Austin, TX, USA, May 14-22, 2016',
    2016,
    'https://taoxie.cs.illinois.edu/publications/mobisoft16-data.pdf'),
  new Publication(
    'c3',
    ['Xuan Lu', 'Xuanzhe Liu', 'Huoran Li', 'Tao Xie', 'Dan Hao', 'Qiaozhu Mei', 'Gang Huang', 'Feng Feng'],
    'PRADA: Prioritizing Android Devices for Apps by Mining Large-Scale Usage Data',
    'In Proceedings of 38th International Conference on Software Engineering (ICSE\'16), pp.3-13, Austin, TX, USA, May 14-22, 2016',
    2016,
    'http://www-personal.umich.edu/~qmei/pub/icse2016-prada.pdf'),
  new Publication(
    'c2',
    ['Huoran Li', 'Xuan Lu', 'Xuanzhe Liu', 'Tao Xie', 'Kaigui Bian', 'Felix Xiaozhu Lin', 'Qiaozhu Mei', 'Feng Feng'],
    'Characterizing Smartphone Usage Patterns from Millions of Android Users',
    'In Proceedings of the 2015 ACM SigCOMM/SigMetircs Internet Measurement Conference (IMC\'15), pp.459-472, Tokyo, Japan, Oct.28-30, 2015',
    2015,
    'https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c33b23b681b697f4cdc450982e5c224c0199ea3d'),
  new Publication(
    'j2',
    ['Gang Huang', 'Yun Ma', 'Xuanzhe Liu', 'Yuchong Luo', 'Xuan Lu', 'M. Brian Blake'],
    'Model-Based Automated Navigation and Composition of Complex Service Mashups',
    'IEEE Transactions on Services Computing (TSC\'15).2015, 8(3): 494-506',
    2015,
    'https://ieeexplore.ieee.org/abstract/document/6877685'),
  new Publication(
    'c1',
    ['Yun Ma', 'Xuan Lu', 'Yuchong Luo', 'Xuanzhe Liu'],
    'A Graph-Based Approach to Assisting Creation of Mobile Web Applications',
    'In Proceedings of the International Conference on Web Services (ICWS\'14), pp.728-729, AK, USA, Jun 27-Jul 2, 2014',
    2014,
    'https://ieeexplore.ieee.org/abstract/document/6928978'),
  new Publication(
    'j1',
    ['Yun Ma', 'Xuan Lu', 'Xuanzhe Liu', 'Xudong Wang', 'M. Brian Blake'],
    'Data-driven Synthesis of Multiple Recommendation Patterns to Create Situational Web Mashups',
    'SCIENCE CHINA Information Sciences.2013, 56(8): 1-16',
    2013,
    'https://link.springer.com/article/10.1007/s11432-013-4908-4'),
];

interface EntryProps {
  publication: Publication;
}
const Entry: React.FC<EntryProps> = (props) => {
  return (
    <li key={props.publication.label}
      className="publication-entry">
      {props.publication.link ?
        <b><a href={props.publication.link}>{props.publication.title}</a></b> :
        <b>{props.publication.title}</b>
      }
      <br />
      {props.publication.authors.map((author) => {
        let lastAuthor = props.publication.authors[(props.publication.authors.length - 1)];
        let split = lastAuthor === author ? '' : ',';
        return author === Publication.me
          ? (<span>{' '}<b>{author}</b>{split}</span>)
          : (<span>{' '}{author}{split}</span>);
      })}
      <br />
      <span><i>{props.publication.conference}</i>{props.publication.toAppear ? ',' : '.'}</span>
      {props.publication.toAppear && <span>{' '}to appear.</span>}
      {props.publication.bestFullPaper && <span className="highlights">🏆 Best Full Paper Award!</span>}
      {props.publication.hasPodcaseLink && <div className="side-notes">
        ➡️ <i>Listen to the <a href="https://dataskeptic.com/blog/episodes/2022/emoji-as-a-predictor">Podcast: Emoji as a Predictor</a> hosted by Kyle Polich, Data Skeptic.</i></div>}
    </li>
  )
}

function groupBy<K, V>(array: V[], grouper: (item: V) => K) {
  return array.reduce((store, item) => {
    var key = grouper(item)
    if (!store.has(key)) {
      store.set(key, [item])
    } else {
      store.get(key)!.push(item)
    }
    return store
  }, new Map<K, V[]>())
}

interface PublicationsProps {
  publications: Publication[];
}
export const Publications: React.FC<PublicationsProps> = (props) => {
  let publicationsByYear: Map<Number, Array<Publication>> = groupBy(props.publications, (pub) => pub.year);
  let years = Array.from(publicationsByYear.keys());
  return (
    <div className="segment">
      <div className='segment-note'>
        See also my <a href='https://scholar.google.com/citations?user=vxvh-8oAAAAJ'>Google Scholar profile</a>.
      </div>
      <div className="segment-content">
        {years.map((year) => {
          let singleYearPublications = publicationsByYear.get(year)!;
          return (
            <div className="segment-sub-section">
              <div className="segment-subtitle">
                {year.toString()}
              </div>
              <ul>
                {singleYearPublications.map((publication) =>
                  <Entry publication={publication} />)}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

