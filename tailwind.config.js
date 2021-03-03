module.exports = {
    purge: { //enabling purge for cleaning css code
        enabled: true,
        content: [
            './public/**/*.html',
            './public/**/*.js',
        ],
        options: {
            keyframes: true,
            fontFace: true,
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: { //custom colors
                headerBlue: "#0e477f",
                headerLink: "#6ca0d3",
                iconText: "#8c8c8c",
                coverColor: "#e8f9ff",
                sliderThreeCover: "#f4f4f4",
                faqText: "#2bb7e5",
                faqQuestion: "#1a5086",
                faqAnswer: "#7d959e",
            },
            fontFamily: { //custom fonts
                roboto: ['Roboto'],
                robotoMedium: ['Roboto-Medium'],
                robotoBold: ['Roboto-Bold'],
                robotoBlack: ['Roboto-Black'],
            },
            backgroundImage: theme => ({ //custom backgroundImages
                'sectionThreeCover': "url('../img/section3-cover.png')",
                'sectionFourCover': "url('../img/section4-cover.png')",
                'sectionFourImg': "url('../img/section4-img.png')",
                'sectionFourCoverTablet': "url('../img/section4-cover-tablet.png')",
            }),
            spacing: { //custom spacings
                '1px': '1px',
                '2px': '2px',
                '3px': '3px',
                '4px': '4px',
                '5px': '5px',
                '6px': '6px',
                '7px': '7px',
                '8px': '8px',
                '9px': '9px',
                '10px': '10px',
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '16px': '16px',
                '17px': '17px',
                '18px': '18px',
                '19px': '19px',
                '20px': '20px',
                '21px': '21px',
                '22px': '22px',
                '23px': '23px',
                '24px': '24px',
                '25px': '25px',
                '26px': '26px',
                '27px': '27px',
                '28px': '28px',
                '29px': '29px',
                '30px': '30px',
                '31px': '31px',
                '32px': '32px',
                '33px': '33px',
                '34px': '34px',
                '35px': '35px',
                '36px': '36px',
                '37px': '37px',
                '38px': '38px',
                '39px': '39px',
                '40px': '40px',
                '41px': '41px',
                '42px': '42px',
                '43px': '43px',
                '44px': '44px',
                '45px': '45px',
                '46px': '46px',
                '47px': '47px',
                '48px': '48px',
                '49px': '49px',
                '50px': '50px',
                '51px': '51px',
                '52px': '52px',
                '53px': '53px',
                '54px': '54px',
                '55px': '55px',
                '56px': '56px',
                '57px': '57px',
                '58px': '58px',
                '59px': '59px',
                '60px': '60px',
                '61px': '61px',
                '63px': '63px',
                '64px': '64px',
                '65px': '65px',
                '66px': '66px',
                '67px': '67px',
                '68px': '68px',
                '69px': '69px',
                '70px': '70px',
                '73px': '73px',
                '75px': '75px',
                '77px': '77px',
                '79px': '79px',
                '80px': '80px',
                '81px': '81px',
                '82px': '82px',
                '84px': '84px',
                '85px': '85px',
                '86px': '86px',
                '87px': '87px',
                '88px': '88px',
                '90px': '90px',
                '93px': '93px',
                '94px': '94px',
                '96px': '96px',
                '97px': '97px',
                '98px': '98px',
                '99px': '99px',
                '100px': '100px',
                '101px': '101px',
                '102px': '102px',
                '103px': '103px',
                '104px': '104px',
                '105px': '105px',
                '108px': '108px',
                '109px': '109px',
                '110px': '110px',
                '111px': '111px',
                '112px': '112px',
                '113px': '113px',
                '114px': '114px',
                '115px': '115px',
                '116px': '116px',
                '117px': '117px',
                '118px': '118px',
                '119px': '119px',
                '120px': '120px',
                '121px': '121px',
                '122px': '122px',
                '123px': '123px',
                '124px': '124px',
                '125px': '125px',
                '129px': '129px',
                '130px': '130px',
                '131px': '131px',
                '136px': '136px',
                '137px': '137px',
                '139px': '139px',
                '140px': '140px',
                '142px': '142px',
                '143px': '143px',
                '144px': '144px',
                '145px': '145px',
                '146px': '146px',
                '147px': '147px',
                '150px': '150px',
                '151px': '151px',
                '152px': '152px',
                '153px': '153px',
                '157px': '157px',
                '158px': '158px',
                '161px': '161px',
                '163px': '163px',
                '165px': '165px',
                '166px': '166px',
                '170px': '170px',
                '171px': '171px',
                '172px': '172px',
                '173px': '173px',
                '175px': '175px',
                '176px': '176px',
                '177px': '177px',
                '178px': '178px',
                '183px': '183px',
                '184px': '184px',
                '188px': '188px',
                '189px': '189px',
                '190px': '190px',
                '191px': '191px',
                '192px': '192px',
                '195px': '195px',
                '197px': '197px',
                '198px': '198px',
                '200px': '200px',
                '204px': '204px',
                '206px': '206px',
                '207px': '207px',
                '208px': '208px',
                '211px': '211px',
                '212px': '212px',
                '213px': '213px',
                '214px': '214px',
                '215px': '215px',
                '216px': '216px',
                '217px': '217px',
                '219px': '219px',
                '224px': '224px',
                '225px': '225px',
                '229px': '229px',
                '231px': '231px',
                '232px': '232px',
                '235px': '235px',
                '237px': '237px',
                '238px': '238px',
                '240px': '240px',
                '242px': '242px',
                '245px': '245px',
                '246px': '246px',
                '252px': '252px',
                '253px': '253px',
                '255px': '255px',
                '256px': '256px',
                '258px': '258px',
                '259px': '259px',
                '260px': '260px',
                '261px': '261px',
                '262px': '262px',
                '265px': '265px',
                '268px': '268px',
                '274px': '274px',
                '275px': '275px',
                '280px': '280px',
                '286px': '286px',
                '290px': '290px',
                '293px': '293px',
                '295px': '295px',
                '297px': '297px',
                '298px': '298px',
                '300px': '300px',
                '303px': '303px',
                '310px': '310px',
                '316px': '316px',
                '319px': '319px',
                '321px': '321px',
                '329px': '329px',
                '335px': '335px',
                '338px': '338px',
                '343px': '343px',
                '350px': '350px',
                '357px': '357px',
                '363px': '363px',
                '365px': '365px',
                '369px': '369px',
                '375px': '375px',
                '377px': '377px',
                '378px': '378px',
                '380px': '380px',
                '381px': '381px',
                '390px': '390px',
                '395px': '395px',
                '400px': '400px',
                '407px': '407px',
                '410px': '410px',
                '419px': '419px',
                '420px': '420px',
                '425px': '425px',
                '434px': '434px',
                '437px': '437px',
                '444px': '444px',
                '446px': '446px',
                '450px': '450px',
                '452px': '452px',
                '455px': '455px',
                '457px': '457px',
                '459px': '459px',
                '463px': '463px',
                '460px': '460px',
                '468px': '468px',
                '470px': '470px',
                '479px': '479px',
                '480px': '480px',
                '488px': '488px',
                '500px': '500px',
                '510px': '510px',
                '515px': '515px',
                '516px': '516px',
                '520px': '520px',
                '530px': '530px',
                '535px': '535px',
                '541px': '541px',
                '548px': '548px',
                '550px': '550px',
                '555px': '555px',
                '560px': '560px',
                '562px': '562px',
                '578px': '578px',
                '581px': '581px',
                '587px': '587px',
                '590px': '590px',
                '594px': '594px',
                '600px': '600px',
                '606px': '606px',
                '610px': '610px',
                '612px': '612px',
                '615px': '615px',
                '616px': '616px',
                '619px': '619px',
                '625px': '625px',
                '627px': '627px',
                '630px': '630px',
                '631px': '631px',
                '638px': '638px',
                '643px': '643px',
                '650px': '650px',
                '652px': '652px',
                '670px': '670px',
                '700px': '700px',
                '705px': '705px',
                '706px': '706px',
                '710px': '710px',
                '720px': '720px',
                '730px': '730px',
                '764px': '764px',
                '800px': '800px',
                '816px': '816px',
                '820px': '820px',
                '825px': '825px',
                '838px': '838px',
                '840px': '840px',
                '847px': '847px',
                '869px': '869px',
                '874px': '874px',
                '903px': '903px',
                '927px': '927px',
                '960px': '960px',
                '971px': '971px',
                '984px': '984px',
                '990px': '990px',
                '1030px': '1030px',
                '1035px': '1035px',
                '1038px': '1038px',
                '1094px': '1094px',
                '1120px': '1120px',
                '1121px': '1121px',
                '1122px': '1122px',
                '1140px': '1140px',
                '1150px': '1150px',
                '1157px': '1157px',
                '1200px': '1200px',
                '1258px': '1258px',
                '1264px': '1264px',
                '1275px': '1275px',
                '1280px': '1280px',
                '1292px': '1292px',
                '1300px': '1300px',
                '1315px': '1315px',
                '1318px': '1318px',
                '1356px': '1356px',
                '1385px': '1385px',
                '1390px': '1390px',
                '1421px': '1421px',
                '1442px': '1442px',
                '1525px': '1525px',
                '1531px': '1531px',
                '1746px': '1746px',
            },
            fontSize: { //custom fontSize
                '8px': '8px',
                '11px': '11px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '16px': '16px',
                '17px': '17px',
                '18px': '18px',
                '19px': '19px',
                '20px': '20px',
                '21px': '21px',
                '22px': '22px',
                '24px': '24px',
                '25px': '25px',
                '26px': '26px',
                '28px': '28px',
                '30px': '30px',
                '32px': '32px',
                '35px': '35px',
                '40px': '40px',
                '42px': '42px',
                '45px': '45px',
                '47px': '47px',
                '48px': '48px',
                '50px': '50px',
                '52px': '52px',
                '53px': '53px',
                '55px': '55px',
                '58px': '58px',
                '60px': '60px',
                '65px': '65px',
                '66px': '66px',
                '70px': '70px',
                '72px': '72px',
                '74px': '74px',
                '75px': '75px',
                '80px': '80px',
                '94px': '94px',
                '120px': '120px',
                '124px': '124px',
                '130px': '130px',
                '140px': '140px',
                '174px': '174px',
            },
            lineHeight: { //custom lineHeight
                '1.571': '1.571',
                '10px': '10px',
                '12px': '12px',
                '13px': '13px',
                '17px': '17px',
                '18px': '18px',
                '20px': '20px',
                '21px': '21px',
                '22px': '22px',
                '23px': '23px',
                '24.12px': '24.12px',
                '26px': '26px',
                '29px': '29px',
                '30px': '30px',
                '33px': '33px',
                '34px': '34px',
                '39px': '39px',
                '45px': '45px',
                '46px': '46px',
                '51px': '51px',
                '53px': '53px',
                '55px': '55px',
                '60px': '60px',
                '65px': '65px',
                '73px': '73px',
                '80px': '80px',
                '84px': '84px',
                '90px': '90px',
                '95px': '95px',
                '96px': '96px',
                '99px': '99px',
                '163px': '163px',
            },
            letterSpacing: { //custom letterSpacing
                'n2.3px': '-2.3px',
                'n2.1px': '-2.1px',
                'n1.4px': '-1.4px',
                'n1.3px': '-1.3px',
                'n1.2px': '-1.2px',
                'n1.15px': '-1.15px',
                'n1.1px': '-1.1px',
                'n0.9px': '-0.9px',
                'n0.8px': '-0.8px',
                'n0.75px': '-0.75px',
                'n0.7px': '-0.7px',
                'n0.55px': '-0.55px',
                'n0.5px': '-0.5px',
                'n0.4px': '-0.4px',
                'n0.3px': '-0.3px',
                'n0.25px': '-0.25px',
                'n0.2px': '-0.2px',
                'n0.15px': '-0.15px',
                'n0.1px': '-0.1px',
                '0.1px': '0.1px',
                '0.14px': '0.14px',
                '0.2px': '0.2px',
                '0.3px': '0.3px',
                '0.4px': '0.4px',
                '0.55px': '0.55px',
                '1px': '1px',
                '2px': '2px',
                '6px': '6px',
            },
            screens: { //custom breakpoints
                '2sm': { 'min': '320px', 'max': '546px' },
                'sm': { 'min': '547px', 'max': '767px' },
                'md': { 'min': '768px', 'max': '1023px' },
                'lg': { 'min': '1024px', 'max': '1279px' },
                'xl': { 'min': '1280px', 'max': '1535px' }
            },
            backgroundSize: { //custom bgSize
                '50%': '50%',
                '100%': '100%',
            },
            inset: { //custom percentages
                'n7%': '-7%',
                '2%': '2%',
                '16%': '16%',
                '22%': '22%',
                '31%': '31%',
                '33%': '33%',
                '40%': '40%',
                '42%': '42%',
                '43%': '43%',
                '44%': '44%',
                '45%': '45%',
            },
            minWidth: { //custom minWidth
                '174px': '174px',
                '278px': '278px',
                '300px': '300px',
                '541px': '541px',
                '963px': '963px',
            },
            maxWidth: { //custom maxWidth
                '50px': '50px',
                '110px': '110px',
                '135px': '135px',
                '158px': '158px',
                '179px': '179px',
                '202px': '202px',
                '250px': '250px',
                '271px': '271px',
                '300px': '300px',
                '360px': '360px',
                '434px': '434px',
                '534px': '534px',
                '541px': '541px',
                '581px': '581px',
                '601px': '601px',
                '708px': '708px',
                '710px': '710px',
                '900px': '900px',
                '930px': '930px',
                '963px': '963px',

            },
            borderWidth: { //custom borderWidths
                '3': '3px',
                '4': '4px',
                '12': '12px',
            },
            boxShadow: { //custom boxShadow for slider
                slider: '0 8px 6px -6px rgba(0,0,0,0.75)',
            },
            strokeWidth: { //custom strokeWidth
                '1px': '1px',
            },
            animation: { //animation for header
                'fadeIn': 'fadeIn 1s ease-in both',
            },
            keyframes: {
                wiggle: {
                    '0%': { opacity: 0, transform: 'translateY(-20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            },
            borderRadius: { //custom borderRadius
                '20px': '20px',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}