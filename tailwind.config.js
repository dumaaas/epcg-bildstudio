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
    darkMode: 'media', // or 'media' or 'class'
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
                navLink: "#88a4ae",
                buttonCover: "#1ab7ea",
                hamburgerMenu: "#7d98a2",
                secondary: {
                    'background': ['white 26%', '#E8F9FF 26%'],
                }
            },
            fontFamily: { //custom fonts
                roboto: ['Roboto'],
                robotoMedium: ['Roboto-Medium'],
                robotoBold: ['Roboto-Bold'],
                robotoBlack: ['Roboto-Black'],
            },
            backgroundImage: theme => ({ //custom backgroundImages
                'sectionThreeCover': "url('../img/section3-cover.png')",
                'sectionThreeCoverDesktop': "url('../img/section3-cover-desktop.png')",
                'sectionFourCover': "url('../img/section4-cover.png')",
                'sectionFourCoverDesktop': "url('../img/section4-cover-desktop.png')",
                'sectionFourCoverDesktopCover': "url('../img/section4-cover-desktop-hover.png')",
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
                '62px': '62px',
                '63px': '63px',
                '64px': '64px',
                '65px': '65px',
                '66px': '66px',
                '67px': '67px',
                '68px': '68px',
                '69px': '69px',
                '70px': '70px',
                '71px': '71px',
                '72px': '72px',
                '73px': '73px',
                '74px': '74px',
                '75px': '75px',
                '77px': '77px',
                '78px': '78px',
                '79px': '79px',
                '80px': '80px',
                '81px': '81px',
                '82px': '82px',
                '84px': '84px',
                '85px': '85px',
                '86px': '86px',
                '87px': '87px',
                '88px': '88px',
                '89px': '89px',
                '90px': '90px',
                '92px': '92px',
                '93px': '93px',
                '94px': '94px',
                '95px': '95px',
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
                '106px': '106px',
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
                '133px': '133px',
                '134px': '134px',
                '136px': '136px',
                '137px': '137px',
                '138px': '138px',
                '139px': '139px',
                '140px': '140px',
                '141px': '141px',
                '142px': '142px',
                '143px': '143px',
                '144px': '144px',
                '145px': '145px',
                '146px': '146px',
                '147px': '147px',
                '148px': '148px',
                '150px': '150px',
                '151px': '151px',
                '152px': '152px',
                '153px': '153px',
                '154px': '154px',
                '155px': '155px',
                '157px': '157px',
                '158px': '158px',
                '161px': '161px',
                '162px': '162px',
                '163px': '163px',
                '165px': '165px',
                '166px': '166px',
                '167px': '167px',
                '170px': '170px',
                '171px': '171px',
                '172px': '172px',
                '173px': '173px',
                '175px': '175px',
                '176px': '176px',
                '177px': '177px',
                '178px': '178px',
                '180px': '180px',
                '183px': '183px',
                '184px': '184px',
                '185px': '185px',
                '187px': '187px',
                '188px': '188px',
                '189px': '189px',
                '190px': '190px',
                '191px': '191px',
                '192px': '192px',
                '194px': '194px',
                '195px': '195px',
                '197px': '197px',
                '198px': '198px',
                '200px': '200px',
                '202px': '202px',
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
                '218px': '218px',
                '219px': '219px',
                '220px': '220px',
                '221px': '221px',
                '223px': '223px',
                '224px': '224px',
                '225px': '225px',
                '226px': '226px',
                '229px': '229px',
                '230px': '230px',
                '231px': '231px',
                '232px': '232px',
                '235px': '235px',
                '237px': '237px',
                '238px': '238px',
                '240px': '240px',
                '242px': '242px',
                '244px': '244px',
                '245px': '245px',
                '246px': '246px',
                '250px': '250px',
                '252px': '252px',
                '253px': '253px',
                '255px': '255px',
                '256px': '256px',
                '258px': '258px',
                '259px': '259px',
                '260px': '260px',
                '261px': '261px',
                '262px': '262px',
                '264px': '264px',
                '265px': '265px',
                '267px': '267px',
                '268px': '268px',
                '269px': '269px',
                '270px': '270px',
                '274px': '274px',
                '275px': '275px',
                '276px': '276px',
                '277px': '277px',
                '280px': '280px',
                '282px': '282px',
                '285px': '285px',
                '286px': '286px',
                '287px': '287px',
                '288px': '288px',
                '290px': '290px',
                '293px': '293px',
                '295px': '295px',
                '296px': '296px',
                '297px': '297px',
                '298px': '298px',
                '300px': '300px',
                '301px': '301px',
                '303px': '303px',
                '306px': '306px',
                '310px': '310px',
                '316px': '316px',
                '318px': '318px',
                '319px': '319px',
                '321px': '321px',
                '324px': '324px',
                '329px': '329px',
                '335px': '335px',
                '338px': '338px',
                '343px': '343px',
                '350px': '350px',
                '354px': '354px',
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
                '415px': '415px',
                '419px': '419px',
                '420px': '420px',
                '425px': '425px',
                '431px': '431px',
                '434px': '434px',
                '435px': '435px',
                '437px': '437px',
                '444px': '444px',
                '446px': '446px',
                '449px': '449px',
                '450px': '450px',
                '452px': '452px',
                '455px': '455px',
                '457px': '457px',
                '459px': '459px',
                '463px': '463px',
                '460px': '460px',
                '467px': '467px',
                '468px': '468px',
                '470px': '470px',
                '479px': '479px',
                '480px': '480px',
                '488px': '488px',
                '494px': '494px',
                '500px': '500px',
                '510px': '510px',
                '513px': '513px',
                '515px': '515px',
                '516px': '516px',
                '520px': '520px',
                '530px': '530px',
                '535px': '535px',
                '538px': '538px',
                '541px': '541px',
                '543px': '543px',
                '548px': '548px',
                '550px': '550px',
                '555px': '555px',
                '559px': '559px',
                '560px': '560px',
                '562px': '562px',
                '564px': '564px',
                '573px': '573px',
                '578px': '578px',
                '581px': '581px',
                '582px': '582px',
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
                '620px': '620px',
                '625px': '625px',
                '627px': '627px',
                '630px': '630px',
                '631px': '631px',
                '638px': '638px',
                '643px': '643px',
                '650px': '650px',
                '652px': '652px',
                '670px': '670px',
                '687px': '687px',
                '700px': '700px',
                '705px': '705px',
                '706px': '706px',
                '710px': '710px',
                '720px': '720px',
                '730px': '730px',
                '764px': '764px',
                '775px': '775px',
                '800px': '800px',
                '816px': '816px',
                '820px': '820px',
                '825px': '825px',
                '828px': '828px',
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
                '1166px': '1166px',
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
                '1417px': '1417px',
                '1421px': '1421px',
                '1442px': '1442px',
                '1525px': '1525px',
                '1531px': '1531px',
                '1746px': '1746px',
            },
            fontSize: { //custom fontSize
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
                '32px': '32px',
                '35px': '35px',
                '40px': '40px',
                '42px': '42px',
                '44px': '44px',
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
                '9px': '9px',
                '10px': '10px',
                '12px': '12px',
                '13px': '13px',
                '14px': '14px',
                '15px': '15px',
                '16px': '16px',
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
                '88px': '88px',
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
                '4sm': {
                    'min': '320px',
                    'max': '459px',
                },
                '3sm': {
                    'min': '460px',
                    'max': '547px',
                },
                '2sm': {
                    'min': '320px',
                    'max': '546px'
                },
                'sm': {
                    'min': '547px',
                    'max': '767px'
                },
                'md': {
                    'min': '768px',
                    'max': '1023px'
                },
                'lg': {
                    'min': '1024px',
                    'max': '1279px'
                },
                'xl': {
                    'min': '1280px',
                    'max': '1535px'
                }
            },
            backgroundSize: { //custom bgSize
                '50%': '50%',
                '100%': '100%',
            },
            inset: { //custom percentages
                'n7%': '-7%',
                '2%': '2%',
                '3%': '3%',
                '6%': '6%',
                '15%': '15%',
                '16%': '16%',
                '17%': '17%',
                '22%': '22%',
                '28%': '28%',
                '30%': '30%',
                '31%': '31%',
                '32%': '32%',
                '33%': '33%',
                '36%': '36%',
                '37%': '37%',
                '39%': '39%',
                '40%': '40%',
                '41%': '41%',
                '42%': '42%',
                '43%': '43%',
                '44%': '44%',
                '45%': '45%',
                '50%': '50%',
                '52%': '52%',
                '55%': '55%',
                '57%': '57%',
                '59%': '59%',
                '60%': '60%',
                '62%': '62%',
            },
            minWidth: { //custom minWidth
                '174px': '174px',
                '278px': '278px',
                '300px': '300px',
                '327px': '327px',
                '430px': '430px',
                '475px': '475px',
                '541px': '541px',
                '574px': '574px',
                '611px': '611px',
                '788px': '788px',
                '846px': '846px',
                '926px': '926px',
                '963px': '963px',
                '1149px': '1149px',
                '1157px': '1157px',
            },
            maxWidth: { //custom maxWidth
                '50px': '50px',
                '110px': '110px',
                '112px': '112px',
                '130px': '130px',
                '135px': '135px',
                '158px': '158px',
                '179px': '179px',
                '180px': '180px',
                '202px': '202px',
                '215px': '215px',
                '225px': '225px',
                '228px': '228px',
                '230px': '230px',
                '250px': '250px',
                '262px': '262px',
                '271px': '271px',
                '300px': '300px',
                '320px': '320px',
                '330px': '330px',
                '335px': '335px',
                '341px': '341px',
                '346px': '346px',
                '357px': '357px',
                '360px': '360px',
                '363px': '363px',
                '367px': '367px',
                '379px': '379px',
                '387px': '387px',
                '400px': '400px',
                '434px': '434px',
                '452px': '452px',
                '460px': '460px',
                '464px': '464px',
                '480px': '480px',
                '500px': '500px',
                '525px': '525px',
                '534px': '534px',
                '541px': '541px',
                '581px': '581px',
                '601px': '601px',
                '660px': '660px',
                '687px': '687px',
                '708px': '708px',
                '710px': '710px',
                '724px': '724px',
                '774px': '774px',
                '846px': '846px',
                '900px': '900px',
                '930px': '930px',
                '963px': '963px',
                '1157px': '1157px',
                '1417px': '1147px',
                '1417pxx': '1417px',
                '1700px': '1700px',

            },
            borderWidth: { //custom borderWidths
                '1': '1px',
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
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(-20px)'
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)'
                    },
                },
            },
            borderRadius: { //custom borderRadius
                '20px': '20px',
            },
            rotate: {
                '9deg': '-9deg'
            }
        },
    },
    variants: {
        extend: {
            // add hover option on background images
            backgroundImage: ['hover', 'focus'],
            scale: ['active', 'group-hover'],

        }
    },
    plugins: [],
}