const tx = Transifex.tx;
const t = Transifex.t;
const onEvent = Transifex.onEvent
const LOCALE_CHANGED = Transifex.LOCALE_CHANGED

const renderMsg = () => { 
    document.getElementById("saas_string").innerHTML = t('PurrfectProject Manager');
    document.getElementById("title_p").innerHTML = t('A SaaS project management tool designed to streamline and simplify the way teams collaborate, communicate, and complete projects.');
    document.getElementById("a-home").innerHTML = t('HOME');
    document.getElementById('a-benefits').innerHTML = t('BENEFITS');
    document.getElementById("a-services").innerHTML = t('FEATURES');    
    document.getElementById("a-products").innerHTML = t('PRODUCT');
    document.getElementById("about-us").innerHTML = t('ABOUT US');    
    document.getElementById("a-pricing").innerHTML = t('PLANS');
    document.getElementById("LPnavbarDropdown").innerHTML = t('LANGUAGE');
    document.getElementById("btn-sign-up").innerHTML = t('Subscribe');   
    document.getElementById("div-features").innerHTML = t('FEATURES');
    document.getElementById("h2-pm-tools").innerHTML = t('Project Management tools');
    document.getElementById("p-heading-text").innerHTML = t('Our suite of meticulously crafted features has been designed to revolutionize the way teams collaborate, communicate, and conquer projects.');
    document.getElementById('nav-tab-1').innerHTML = t('Kanban board');
    document.getElementById('nav-tab-2').innerHTML = t('Progress tracking');
    document.getElementById('nav-tab-3').innerHTML = t('Collaborative chat');
    document.getElementById('h3-kanban-text-1').innerHTML = t('Kanban board Is Easier Than Ever');
    document.getElementById('h3-kanban-text-2').innerHTML = t('The best project tracking tools');
    document.getElementById('h3-kanban-text-3').innerHTML = t('Measure progress in your own metrics');
    document.getElementById('p-kanban-text-1').innerHTML = t('Visualize your projects like never before with our Kanban Boards. Assign tasks to your team members, moving them from column to column as progress is made. Whether it\'s planning, in progress, or completed, you\'ll enjoy a dynamic and engaging way to track tasks and projects.');
    document.getElementById('p-kanban-text-2').innerHTML = t('Stay informed about project timelines with our Pawsitive Progress Tracking feature.');
    document.getElementById('p-kanban-text-3').innerHTML = t('Communication is a breeze with our integrated chat platform, Exchange messages, files, and ideas with team members in a fun and efficient way. ');
    document.getElementById('div-li-kanban-1').innerHTML = t('Assign and track tasks using interactive Kanban boards, visually moving items through different stages for a clear overview.');
    document.getElementById('div-li-kanban-2').innerHTML = t('Easily reorder and update tasks using intuitive drag-and-drop actions, adapting to changing project priorities.');
    document.getElementById('div-li-kanban-3').innerHTML = t('Quickly assess project status, identify bottlenecks, and monitor task progression using a user-friendly interface.');
    document.getElementById('div-li-tracking-1').innerHTML = t('Utilize Gantt charts to map project milestones, deadlines, and dependencies, facilitating efficient timeline management.');
    document.getElementById('div-li-tracking-2').innerHTML = t('Stay informed about task completions and upcoming deadlines, ensuring transparency and alignment within the team.');
    document.getElementById('div-li-tracking-3').innerHTML = t('Gain insights from visual project progress data, aiding data-driven decisions and optimizing resource allocation.');
    document.getElementById('div-li-metric-1').innerHTML = t('Engage in seamless discussions through our integrated chat platform, enabling efficient communication among team members.');
    document.getElementById('div-li-metric-2').innerHTML = t('Share files directly within conversations, eliminating the need for separate file-sharing platforms and enhancing collaboration.');
    document.getElementById('div-li-metric-3').innerHTML = t('Express emotions and reactions using a range of emojis, fostering interactive and engaging team communication.');
    document.getElementById('suscribe-elements-1').innerHTML = t('SUSCRIBE');
    document.getElementById('suscribe-elements-2').innerHTML = t('SUSCRIBE');
    document.getElementById('suscribe-elements-3').innerHTML = t('SUSCRIBE');
    document.getElementById('benefits-div').innerHTML = t('BENEFITS');
    document.getElementById('h2-benefits').innerHTML = t('Optimize the Project Management activities.');
    document.getElementById('h4-benefits-card-1').innerHTML = t('Visual Progress Insights');
    document.getElementById('h4-benefits-card-2').innerHTML = t('Time and Resource Optimization');
    document.getElementById('h4-benefits-card-3').innerHTML = t('Cost-Effective Solution');
    document.getElementById('p-benefits-card-1').innerHTML = t('The visual nature of PurrfectProject Manager, including Gantt charts and Kanban boards, provides clear insights into project progress.');
    document.getElementById('p-benefits-card-2').innerHTML = t('Automation features streamline workflows, reducing manual repetitive tasks. This optimization boosts productivity by enabling teams to focus on strategic initiatives and value-added activities.');
    document.getElementById('p-benefits-card-3').innerHTML = t('As a SaaS solution, PurrfectProject Manager eliminates the need for extensive hardware or infrastructure investment. With a subscription-based model, you only pay for the features you need, reducing upfront costs.');
    document.getElementById('h2-details').innerHTML = t('PurrfectProject Manager');
    document.getElementById('p-details').innerHTML = t('PurrfectProject Manager, offered by Meowtech Innovations, is an innovative SaaS solution that revolutionizes project management. With intuitive features, real-time collaboration tools, and visual progress tracking, teams can streamline their workflows, enhance communication, and achieve project success. From customizable Kanban boards to automated workflows, PurrfectProject Manager delivers efficiency, engagement, and data-driven insights, making project management a delightful journey. ');
    document.getElementById('li-details-1').innerHTML = t('Elevate your team\'s productivity with the power of PurrfectProject Manager');
    document.getElementById('li-details-2').innerHTML = t('Where efficiency meets enjoyment.');
    document.getElementById('btn-details').innerHTML = t('SUBSCRIBE');
    document.getElementById('div-p-video').innerHTML = t('This is not about PurrfectProject Manager, it is about Transifex, but it is also cool.');
    document.getElementById('div-pricing').innerHTML = t('PLANS');
    document.getElementById('h2-pricing').innerHTML = t('Pricing Options Table');
    document.getElementById('div-plan-1').innerHTML = t('BASIC');
    document.getElementById('div-plan-2').innerHTML = t('ADVANCED');
    document.getElementById('div-plan-3').innerHTML = t('COMPLETE');
    document.getElementById('price-free').innerHTML = t('Free');
    document.getElementById('div-frequency-1').innerHTML = t('14 days trial');
    document.getElementById('div-frequency-2').innerHTML = t('Monthly');
    document.getElementById('div-frequency-3').innerHTML = t('Monthly');
    document.getElementById('btn-plans-1').innerHTML = t('SUBSCRIBE');
    document.getElementById('btn-plans-2').innerHTML = t('SUBSCRIBE');
    document.getElementById('btn-plans-3').innerHTML = t('SUBSCRIBE');
    document.getElementById('testimonial-text-1').innerHTML = t('PurrfectProject Manager has transformed the way our marketing team collaborates. The visual Kanban boards and Gantt charts keep us organized and on track.');
    document.getElementById('testimonial-text-2').innerHTML = t('Running a startup means juggling multiple tasks. PurrfectProject Manager has been a lifesaver. The visual insights help me stay in control of project timelines, and the mobile app allows me to manage tasks on the go.');
    document.getElementById('testimonial-text-3').innerHTML = t('PurrfectProject Manager brings a playful spirit to our design team. Customizing profiles and earning treats for achievements has created a sense of camaraderie. ');
    document.getElementById('testimonial-text-4').innerHTML = t('As an IT Director, I\'m all about optimizing processes. PurrfectProject Manager has been a game-changer for our team.');
    document.getElementById('div-suscribe-section').innerHTML = t('SUBSCRIBE');
    document.getElementById('h2-suscribe-section').innerHTML = t('Share your email address with us and one of our sales representatives will contact you.');
    document.getElementById('btn-suscribe-done').innerHTML = t('SUSCRIBE');

  };
renderMsg();  // -> 'Hello'
onEvent(LOCALE_CHANGED, renderMsg);  // -> 'Γεια'

tx.getLanguages()
  .then(languages => {
    for (let index = 0; index < languages.length; index++) {
        let divLanguage = document.querySelector("#div-language-picker");
        if (index>0) {
            let divLanguageDivider = '<div class="dropdown-items-divide-hr"></div>';
            divLanguage.innerHTML += divLanguageDivider;
        }
        const element = languages[index];
        let divLanguageItem = '<a class="dropdown-item" href="javascript:updateLanguage(\''+element['code']+'\')"><span class="item-text">'+ element['name']+'</span></a>';
        divLanguage.innerHTML += divLanguageItem;
    }
  });







  