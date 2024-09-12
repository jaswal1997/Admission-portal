// Mock database of users with their exams

const users = [

    {

        username: 'CIIMCM101',

        password: 'MCM101',

        exam: [
            { question: 'harvest', options: ['autumn', 'stockpile ', 'tractor', 'crop'], correct: 'crop' },
            { question: 'book', options: ['fiction', 'pages', 'pictures',"learning"], correct: 'pages' },
            { question: 'language', options: ['tongue', 'slang', 'writing',"words"], correct: 'words' },
            { question: 'school', options: ['student', 'report card', 'test',"learning"], correct: 'student' },
            { question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', options: ['(1/3)', '(1/8)', '(2/8)',"(1/16)"], correct: '(1/8)' },
            { question: 'guitar', options: ['strings', 'teacher', 'band',"songs"], correct: 'strings' },
            { question: 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?', options: ['12', '27', '53',"14"], correct: '14' },
            { question: 'election', options: ['President', 'November', 'nation',"voter"], correct: 'voter' },
            { question: 'swimming', options: ['pool', 'bathing suit', 'water',"life jacket"], correct: 'water' },
            { question: 'ENORMOUS (ANTONYMS)', options: ['soft', 'Average', 'Tiny',"weak"], correct: 'tiny' },
            { question: 'OBEYING', options: ['Ordering', 'Following', 'Refusing',"Contradicting"], correct: 'Ordering' },
            { question: 'The workers are hell bent at getting what is due to them.', options: ['hell bent for getting', 'hell bent upon getting', 'No improvement',"hell bent upon getting"], correct: 'hell bent upon getting' },
            { question: 'his powerful desire brought about his downfall.', options: ['His intense desire', 'His desire for power', 'His fatal desire',"No improvement"], correct: 'His desire for power' },
            { question: 'If he had time he will call you', options: ['would have', 'would have had', 'has',"No improvement"], correct: 'has' },
            { question: 'During his long discourse, he did not touch that point.', options: ['touch upon', 'touch on', 'touch of',"No improvement"], correct: 'touch on' },
            { question: 'That which cannot be corrected', options: ['Unintelligible', 'Indelible', 'Illegible',"Incorrigible"], correct: 'Incorrigible' },
            { question: 'The study of ancient societies', options: ['Anthropology', 'Archaeology', 'History',"Ethnology"], correct: 'Archaeology' },
            { question: 'List of the business or subjects to be considered at a meeting', options: ['Schedule', 'Timetable', 'Agenda',"plan"], correct: 'Agenda' },
            { question: 'A person who knows many foreign languages', options: ['Linguist', 'Grammarian', 'Polyglot',"Bilingual"], correct: 'Linguist' },
            { question: 'After driving professor Kumar to the museum she dropped him at his hotel.', options: ['After being driven to the museum, Professor Kumar was dropped at his hotel.', 'Professor Kumar was being driven dropped at his hotel.', 'After she had driven Professor Kumar to the museum she had dropped him at his hotel.',"After she was driven Professor Kumar to the museum she had dropped him at his hotel"], correct: 'After being driven to the museum, Professor Kumar was dropped at his hotel.' },
            { question: 'They greet me cheerfully every morning.', options: ['Every morning I was greeted cheerfully.', 'I am greeted cheerfully by them every morning.', 'I am greeted cheerfully by them every morning.',"Cheerful greeting is done by them every morning to me."], correct: 'I am greeted cheerfully by them every morning.' },
            { question: 'Darjeeling grows tea.', options: ['Tea is being grown in Darjeeling.', 'Let the tea be grown in Darjeeling.', 'Tea is grown in Darjeeling.',"Tea grows in Darjeeling."], correct: 'Tea is grown in Darjeeling.' },
            { question: 'You need to clean your shoes properly.', options: ['Your shoes are needed to clean properly', 'You are needed to clean your shoes properly.', 'Your shoes need to be cleaned properly.',"Your shoes are needed by you to clean properly."], correct: 'Your shoes need to be cleaned properly.' },
            { question: 'LIGHT:BLIND', options: ['speech: dumb', 'language: deaf', 'tongue: sound',"voice: vibration"], correct: 'speech: dumb' },
            { question: '1. I         2.immediately    3.salary    4. my     5. want        ', options: ['43152', '15432', '25143',"42351"], correct: '15432' },
            { question: '1. do	2. today	3. you  4. must	5. it	 ', options: ['34152', '25413', '12543',"51324"], correct: '34152' },
            { question: '1. medicine	2. a	3. Neeta 4. given	5. was', options: ['51423', '25431', '15423',"35421"], correct: '35421' },
            { question: 'You need not come unless you want to.', options: ['You dont need to come unless you want to', 'You come unless you dont want to', 'No correction required',"No correction required"], correct: 'You dont need to come unless you want to' },
            { question: 'The man to who I sold my house was a cheat.', options: ['to whom I sell', 'to who I sell', 'No correction required',"to whom I sold"], correct: 'to whom I sold' },
            { question: 'He is too important for tolerating any delay.', options: ['to tolerate', 'to tolerating', 'with tolerating',"at tolerating"], correct: 'to tolerate' },
            { question: 'They are not beware of all the facts', options: ['are not aware for', 'are not aware of', 'must not to be aware for',"No correction required"], correct: 'are not aware of' },
            { question: 'The brain of any computer system is', options: ['ALU', 'Memory', 'CPU',"Control unit"], correct: 'CPU' },
            { question: 'A device that converts mechanical into electrical energy is?', options: ['solar cell', 'thermocouple', 'chemical cell',"generator"], correct: 'generator' },
            { question: 'Which of the following is used in pencils?', options: ['Graphite', 'silicon', 'charcoal',"phosphorus"], correct: 'Graphite' },
            { question: 'Chemical formula for water is', options: ['NaAlO2', 'H2O', 'Al2O3',"CaSiO3"], correct: 'H2O' },
            { question: 'Washing soda is the common name for', options: ['Sodium carbonate', 'Calcium bicarbonate', 'Sodium bicarbonate',"Calcium carbonate"], correct: 'Sodium carbonate' },
            { question: 'Which of the gas is not known as green house gas?', options: ['Nitrous oxide', 'Methane', 'Carbon dioxide',"Hydrogen"], correct: 'Methane' },
            { question: '19 * 6', options: ['116', '126', '114',"156"], correct: '114' },
            { question: ' What does the abbreviation HTML stand for? ', options: [' Hypertext Markup Language. ', 'Hypertext Markdown Language.', 'High Text Markup Language. '," None of the above"], correct: 'Hypertext Markup Language.' },
            { question: 'RAM stands for:- ', options: [' Random Access Memory ', 'Runtime Access Memory', 'Runtime Authenticate Memory ',"Random Authenticate Memory"], correct: 'Random Access Memory' },
            { question: 'Which of the following software is used for making resume?', options: [' MS Excel ', 'MS Word', 'Dev C ',"Java"], correct: 'MS Word' },
            { question: 'ROM Stand for:-', options: [' Read Only Memory', 'Random Only Memory', 'Random only on memory',"Java"], correct: 'Read Only Memory' },
            { question: 'COMPUTER stand for:-', options: [' Common Operating Machine Purposely Used for Technological and Educational Research', 'Common Operating Machine Purposely Used for Technological  Educational Research', 'Computer Operating Machine Purposely Used for Technological and Educational Research',"Java"], correct: 'Common Operating Machine Purposely Used for Technological and Educational Research' },
            { question: 'Computer word come from:-', options: ['Binary', 'Compute', 'Dev C ',"programming"], correct: 'Compute' },
            { question: 'Computer Understand which language:-', options: ['Binary', 'JAVA', 'Dev C ',"C++"], correct: 'Binary' },
            { question: 'LAN Stands for:-', options: ['Local Area Network', 'Logical Area Network', 'Logical Area Networking ',"Local Area Networking"], correct: 'Local Area Network' },
            { question: 'WAN Stands for:-:-', options: ['Wide Area Network', 'Widly Area Network', 'Widly Area Networking ',"wide Area Networking"], correct: 'Wide Area Network' },
            //check
            { question: ' Arrange the words given below in a meaningful sequence.   1.Presentation   2. Recommendation   3. Arrival   4. Discussion  5. Introduction   ', options: ['5, 3, 4, 1, 2', '3, 5, 4, 2, 1', '3, 5, 1, 4, 2',"5, 3, 1, 2, 4"], correct: '3, 5, 1, 4, 2' },

            { question: ' What is the capital of India?', options: ['Mumbai', 'Himachal Pradesh', 'Delhi', 'Punjab'], correct: 'Delhi' },
            { question: ' The Arithmetic mean of 5, 10, 12, 18, 20 is:', options: ['5', ' 13', '25', '55'], correct: '13' },
            { question: ' 7 8 15 24 35 48 63 _?', options: ['70', ' 75', '80', '55'], correct: '80' },
            { question: ' A / B = C; C > D then', options: ['A is always greater than D', ' C is always greater than D', 'B is always less than D', 'None'], correct: 'A is always greater than D' },
            { question: ' Which of the following numbers is divisible by 3? (i) 541326 (ii) 5967013', options: ['(ii) only', '(i) only', '(i) and (ii) both', '(i) and (ii) none'], correct: '(i) only' },
            { question: ' 12 1,2,6,24,_?', options: ['111', '151', '120', '125'], correct: '120' },
            { question: ' Choose the pair of numbers which comes next 75 65 85 55 45 85 35', options: ['25 15', '25 85 ', '35 25 ', '35 85'], correct: '25 85' },
            { question: ' Which word does NOT belong with the others?', options: ['Tyre', 'steering wheel', 'engine ', 'car'], correct: 'car' },
            { question: ' Which word does NOT belong with the others?', options: ['heading', 'body ', 'letter ', 'closing'], correct: 'letter' },
            { question: ' Which word does NOT belong with the others?', options: ['leopard', 'cougar ', 'elephant', 'lion'], correct: 'elephant' },
            { question: ' Cup is to coffee as bowl is to', options: ['dish', 'soup ', 'spoon', 'food'], correct: 'soup' },
            { question: ' Play is to actor as concert is to', options: ['symphony', 'musician ', 'piano', 'percussion'], correct: 'musician' },
            { question: ' Sponge is to porous as rubber is to', options: ['massive', 'solid ', 'elastic', 'inflexible'], correct: 'elastic' },
            { question: ' Careful is to cautious as boastful is to', options: ['arrogant', 'humble ', 'joyful', 'suspicious'], correct: 'arrogant' },
            { question: ' SCD, TEF, UGH, ____, WKL', options: ['CMN', 'UJI ', 'VIJ', 'IJT'], correct: 'VIJ' },
            { question: ' B2CD, _____, BCD4, B5CD, BC6D', options: ['B2C2D', 'BC3D ', 'B2C3D', 'BCD7'], correct: 'BC3D' },
            { question: ' ELFA, GLHA, ILJA, _____, MLNA', options: ['OLPA', 'KLMA ', 'LLMA', 'KLLA'], correct: 'KLLA' },
            { question: ' CMM, EOO, GQQ, _____, KUU', options: ['GRR', 'GSS ', 'ISS', 'ITT'], correct: 'ISS' },
            { question: ' Exercise is to gym as eating is to', options: ['food', 'dieting ', 'fitness', 'restaurant'], correct: 'restaurant' },
            { question: ' What is smallest unit of the information?', options: ['A bit', 'A byte ', 'A block', 'A nibble'], correct: 'A bit' },
            { question: ' Which of the following is an output device?', options: ['Keyboard', 'Mouse ', 'Light pen', 'VDU'], correct: 'VDU' },
            { question: ' BIOS is used?', options: ['By operating system', 'By compiler ', 'By interpreter', 'By application software'], correct: 'By operating system' },
            //check
            

           

        ]

    },

    {

        username: 'CIIMCM102',

        password: 'MCM102',

        exam: [
            { question: ' What is smallest unit of the information?', options: ['A bit', 'A byte ', 'A block', 'A nibble'], correct: 'A bit' },
            { question: ' Which of the following is an output device?', options: ['Keyboard', 'Mouse ', 'Light pen', 'VDU'], correct: 'VDU' },
            { question: ' BIOS is used?', options: ['By operating system', 'By compiler ', 'By interpreter', 'By application software'], correct: 'By operating system' },

            { question: ' Arrange the words given below in a meaningful sequence.   1.Presentation   2. Recommendation   3. Arrival   4. Discussion  5. Introduction   ', options: ['5, 3, 4, 1, 2', '3, 5, 4, 2, 1', '3, 5, 1, 4, 2',"5, 3, 1, 2, 4"], correct: '3, 5, 1, 4, 2' },

            { question: ' What is the capital of India?', options: ['Mumbai', 'Himachal Pradesh', 'Delhi', 'Punjab'], correct: 'Delhi' },
            { question: ' The Arithmetic mean of 5, 10, 12, 18, 20 is:', options: ['5', ' 13', '25', '55'], correct: '13' },
            { question: ' 7 8 15 24 35 48 63 _?', options: ['70', ' 75', '80', '55'], correct: '80' },
            { question: ' A / B = C; C > D then', options: ['A is always greater than D', ' C is always greater than D', 'B is always less than D', 'None'], correct: 'A is always greater than D' },
            { question: ' Which of the following numbers is divisible by 3? (i) 541326 (ii) 5967013', options: ['(ii) only', '(i) only', '(i) and (ii) both', '(i) and (ii) none'], correct: '(i) only' },
            { question: ' 12 1,2,6,24,_?', options: ['111', '151', '120', '125'], correct: '120' },
            { question: ' Choose the pair of numbers which comes next 75 65 85 55 45 85 35', options: ['25 15', '25 85 ', '35 25 ', '35 85'], correct: '25 85' },
            { question: ' Which word does NOT belong with the others?', options: ['Tyre', 'steering wheel', 'engine ', 'car'], correct: 'car' },
            { question: ' Which word does NOT belong with the others?', options: ['heading', 'body ', 'letter ', 'closing'], correct: 'letter' },
            { question: ' Which word does NOT belong with the others?', options: ['leopard', 'cougar ', 'elephant', 'lion'], correct: 'elephant' },
            { question: ' Cup is to coffee as bowl is to', options: ['dish', 'soup ', 'spoon', 'food'], correct: 'soup' },
            { question: ' Play is to actor as concert is to', options: ['symphony', 'musician ', 'piano', 'percussion'], correct: 'musician' },
            { question: ' Sponge is to porous as rubber is to', options: ['massive', 'solid ', 'elastic', 'inflexible'], correct: 'elastic' },
            { question: ' Careful is to cautious as boastful is to', options: ['arrogant', 'humble ', 'joyful', 'suspicious'], correct: 'arrogant' },
            { question: ' SCD, TEF, UGH, ____, WKL', options: ['CMN', 'UJI ', 'VIJ', 'IJT'], correct: 'VIJ' },
            { question: ' B2CD, _____, BCD4, B5CD, BC6D', options: ['B2C2D', 'BC3D ', 'B2C3D', 'BCD7'], correct: 'BC3D' },
            { question: ' ELFA, GLHA, ILJA, _____, MLNA', options: ['OLPA', 'KLMA ', 'LLMA', 'KLLA'], correct: 'KLLA' },
            { question: ' CMM, EOO, GQQ, _____, KUU', options: ['GRR', 'GSS ', 'ISS', 'ITT'], correct: 'ISS' },
            { question: ' Exercise is to gym as eating is to', options: ['food', 'dieting ', 'fitness', 'restaurant'], correct: 'restaurant' },
            { question: 'harvest', options: ['autumn', 'stockpile ', 'tractor', 'crop'], correct: 'crop' },
            { question: 'book', options: ['fiction', 'pages', 'pictures',"learning"], correct: 'pages' },
            { question: 'language', options: ['tongue', 'slang', 'writing',"words"], correct: 'words' },
            { question: 'school', options: ['student', 'report card', 'test',"learning"], correct: 'student' },
            { question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', options: ['(1/3)', '(1/8)', '(2/8)',"(1/16)"], correct: '(1/8)' },
            { question: 'guitar', options: ['strings', 'teacher', 'band',"songs"], correct: 'strings' },
            { question: 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?', options: ['12', '27', '53',"14"], correct: '14' },
            { question: 'election', options: ['President', 'November', 'nation',"voter"], correct: 'voter' },
            { question: 'swimming', options: ['pool', 'bathing suit', 'water',"life jacket"], correct: 'water' },
            { question: 'ENORMOUS (ANTONYMS)', options: ['soft', 'Average', 'Tiny',"weak"], correct: 'tiny' },
            { question: 'OBEYING', options: ['Ordering', 'Following', 'Refusing',"Contradicting"], correct: 'Ordering' },
            { question: 'The workers are hell bent at getting what is due to them.', options: ['hell bent for getting', 'hell bent upon getting', 'No improvement',"hell bent upon getting"], correct: 'hell bent upon getting' },
            { question: 'his powerful desire brought about his downfall.', options: ['His intense desire', 'His desire for power', 'His fatal desire',"No improvement"], correct: 'His desire for power' },
            { question: 'If he had time he will call you', options: ['would have', 'would have had', 'has',"No improvement"], correct: 'has' },
            { question: 'During his long discourse, he did not touch that point.', options: ['touch upon', 'touch on', 'touch of',"No improvement"], correct: 'touch on' },
            { question: 'That which cannot be corrected', options: ['Unintelligible', 'Indelible', 'Illegible',"Incorrigible"], correct: 'Incorrigible' },
            { question: 'The study of ancient societies', options: ['Anthropology', 'Archaeology', 'History',"Ethnology"], correct: 'Archaeology' },
            { question: 'List of the business or subjects to be considered at a meeting', options: ['Schedule', 'Timetable', 'Agenda',"plan"], correct: 'Agenda' },
            { question: 'A person who knows many foreign languages', options: ['Linguist', 'Grammarian', 'Polyglot',"Bilingual"], correct: 'Linguist' },
            { question: 'After driving professor Kumar to the museum she dropped him at his hotel.', options: ['After being driven to the museum, Professor Kumar was dropped at his hotel.', 'Professor Kumar was being driven dropped at his hotel.', 'After she had driven Professor Kumar to the museum she had dropped him at his hotel.',"After she was driven Professor Kumar to the museum she had dropped him at his hotel"], correct: 'After being driven to the museum, Professor Kumar was dropped at his hotel.' },
            { question: 'They greet me cheerfully every morning.', options: ['Every morning I was greeted cheerfully.', 'I am greeted cheerfully by them every morning.', 'I am greeted cheerfully by them every morning.',"Cheerful greeting is done by them every morning to me."], correct: 'I am greeted cheerfully by them every morning.' },
            { question: 'Darjeeling grows tea.', options: ['Tea is being grown in Darjeeling.', 'Let the tea be grown in Darjeeling.', 'Tea is grown in Darjeeling.',"Tea grows in Darjeeling."], correct: 'Tea is grown in Darjeeling.' },
            { question: 'You need to clean your shoes properly.', options: ['Your shoes are needed to clean properly', 'You are needed to clean your shoes properly.', 'Your shoes need to be cleaned properly.',"Your shoes are needed by you to clean properly."], correct: 'Your shoes need to be cleaned properly.' },
            { question: 'LIGHT:BLIND', options: ['speech: dumb', 'language: deaf', 'tongue: sound',"voice: vibration"], correct: 'speech: dumb' },
            { question: '1. I         2.immediately    3.salary    4. my     5. want        ', options: ['43152', '15432', '25143',"42351"], correct: '15432' },
            { question: '1. do	2. today	3. you  4. must	5. it	 ', options: ['34152', '25413', '12543',"51324"], correct: '34152' },
            { question: '1. medicine	2. a	3. Neeta 4. given	5. was', options: ['51423', '25431', '15423',"35421"], correct: '35421' },
            { question: 'You need not come unless you want to.', options: ['You dont need to come unless you want to', 'You come unless you dont want to', 'No correction required',"No correction required"], correct: 'You dont need to come unless you want to' },
            { question: 'The man to who I sold my house was a cheat.', options: ['to whom I sell', 'to who I sell', 'No correction required',"to whom I sold"], correct: 'to whom I sold' },
            { question: 'He is too important for tolerating any delay.', options: ['to tolerate', 'to tolerating', 'with tolerating',"at tolerating"], correct: 'to tolerate' },
            { question: 'They are not beware of all the facts', options: ['are not aware for', 'are not aware of', 'must not to be aware for',"No correction required"], correct: 'are not aware of' },
            { question: 'The brain of any computer system is', options: ['ALU', 'Memory', 'CPU',"Control unit"], correct: 'CPU' },
            { question: 'A device that converts mechanical into electrical energy is?', options: ['solar cell', 'thermocouple', 'chemical cell',"generator"], correct: 'generator' },
            { question: 'Which of the following is used in pencils?', options: ['Graphite', 'silicon', 'charcoal',"phosphorus"], correct: 'Graphite' },
            { question: 'Chemical formula for water is', options: ['NaAlO2', 'H2O', 'Al2O3',"CaSiO3"], correct: 'H2O' },
            { question: 'Washing soda is the common name for', options: ['Sodium carbonate', 'Calcium bicarbonate', 'Sodium bicarbonate',"Calcium carbonate"], correct: 'Sodium carbonate' },
            { question: 'Which of the gas is not known as green house gas?', options: ['Nitrous oxide', 'Methane', 'Carbon dioxide',"Hydrogen"], correct: 'Methane' },
            { question: '19 * 6', options: ['116', '126', '114',"156"], correct: '114' },
            { question: ' What does the abbreviation HTML stand for? ', options: [' Hypertext Markup Language. ', 'Hypertext Markdown Language.', 'High Text Markup Language. '," None of the above"], correct: 'Hypertext Markup Language.' },
            { question: 'RAM stands for:- ', options: [' Random Access Memory ', 'Runtime Access Memory', 'Runtime Authenticate Memory ',"Random Authenticate Memory"], correct: 'Random Access Memory' },
            { question: 'Which of the following software is used for making resume?', options: [' MS Excel ', 'MS Word', 'Dev C ',"Java"], correct: 'MS Word' },
            { question: 'ROM Stand for:-', options: [' Read Only Memory', 'Random Only Memory', 'Random only on memory',"Java"], correct: 'Read Only Memory' },
            { question: 'COMPUTER stand for:-', options: [' Common Operating Machine Purposely Used for Technological and Educational Research', 'Common Operating Machine Purposely Used for Technological  Educational Research', 'Computer Operating Machine Purposely Used for Technological and Educational Research',"Java"], correct: 'Common Operating Machine Purposely Used for Technological and Educational Research' },
            { question: 'Computer word come from:-', options: ['Binary', 'Compute', 'Dev C ',"programming"], correct: 'Compute' },
            { question: 'Computer Understand which language:-', options: ['Binary', 'JAVA', 'Dev C ',"C++"], correct: 'Binary' },
            { question: 'LAN Stands for:-', options: ['Local Area Network', 'Logical Area Network', 'Logical Area Networking ',"Local Area Networking"], correct: 'Local Area Network' },
            { question: 'WAN Stands for:-:-', options: ['Wide Area Network', 'Widly Area Network', 'Widly Area Networking ',"wide Area Networking"], correct: 'Wide Area Network' },
            

        ]

    },
    {

        username: 'CIIMCM103',

        password: 'MCM103',

        exam: [
            { question: 'harvest', options: ['autumn', 'stockpile ', 'tractor', 'crop'], correct: 'crop' },
            { question: 'book', options: ['fiction', 'pages', 'pictures',"learning"], correct: 'pages' },
            { question: 'language', options: ['tongue', 'slang', 'writing',"words"], correct: 'words' },
            { question: 'school', options: ['student', 'report card', 'test',"learning"], correct: 'student' },
            { question: 'Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?', options: ['(1/3)', '(1/8)', '(2/8)',"(1/16)"], correct: '(1/8)' },
            { question: 'guitar', options: ['strings', 'teacher', 'band',"songs"], correct: 'strings' },
            { question: 'Look at this series: 53, 53, 40, 40, 27, 27, ... What number should come next?', options: ['12', '27', '53',"14"], correct: '14' },
            { question: 'election', options: ['President', 'November', 'nation',"voter"], correct: 'voter' },
            { question: 'swimming', options: ['pool', 'bathing suit', 'water',"life jacket"], correct: 'water' },
            { question: 'ENORMOUS (ANTONYMS)', options: ['soft', 'Average', 'Tiny',"weak"], correct: 'tiny' },
            { question: 'OBEYING', options: ['Ordering', 'Following', 'Refusing',"Contradicting"], correct: 'Ordering' },
            { question: 'The workers are hell bent at getting what is due to them.', options: ['hell bent for getting', 'hell bent upon getting', 'No improvement',"hell bent upon getting"], correct: 'hell bent upon getting' },
            { question: 'his powerful desire brought about his downfall.', options: ['His intense desire', 'His desire for power', 'His fatal desire',"No improvement"], correct: 'His desire for power' },
            { question: 'If he had time he will call you', options: ['would have', 'would have had', 'has',"No improvement"], correct: 'has' },
            { question: 'During his long discourse, he did not touch that point.', options: ['touch upon', 'touch on', 'touch of',"No improvement"], correct: 'touch on' },
            { question: 'That which cannot be corrected', options: ['Unintelligible', 'Indelible', 'Illegible',"Incorrigible"], correct: 'Incorrigible' },
            { question: 'The study of ancient societies', options: ['Anthropology', 'Archaeology', 'History',"Ethnology"], correct: 'Archaeology' },
            { question: 'List of the business or subjects to be considered at a meeting', options: ['Schedule', 'Timetable', 'Agenda',"plan"], correct: 'Agenda' },
            { question: 'A person who knows many foreign languages', options: ['Linguist', 'Grammarian', 'Polyglot',"Bilingual"], correct: 'Linguist' },
            { question: 'After driving professor Kumar to the museum she dropped him at his hotel.', options: ['After being driven to the museum, Professor Kumar was dropped at his hotel.', 'Professor Kumar was being driven dropped at his hotel.', 'After she had driven Professor Kumar to the museum she had dropped him at his hotel.',"After she was driven Professor Kumar to the museum she had dropped him at his hotel"], correct: 'After being driven to the museum, Professor Kumar was dropped at his hotel.' },
            { question: 'They greet me cheerfully every morning.', options: ['Every morning I was greeted cheerfully.', 'I am greeted cheerfully by them every morning.', 'I am greeted cheerfully by them every morning.',"Cheerful greeting is done by them every morning to me."], correct: 'I am greeted cheerfully by them every morning.' },
            { question: 'Darjeeling grows tea.', options: ['Tea is being grown in Darjeeling.', 'Let the tea be grown in Darjeeling.', 'Tea is grown in Darjeeling.',"Tea grows in Darjeeling."], correct: 'Tea is grown in Darjeeling.' },
            { question: 'You need to clean your shoes properly.', options: ['Your shoes are needed to clean properly', 'You are needed to clean your shoes properly.', 'Your shoes need to be cleaned properly.',"Your shoes are needed by you to clean properly."], correct: 'Your shoes need to be cleaned properly.' },
            { question: 'LIGHT:BLIND', options: ['speech: dumb', 'language: deaf', 'tongue: sound',"voice: vibration"], correct: 'speech: dumb' },
            { question: '1. I         2.immediately    3.salary    4. my     5. want        ', options: ['43152', '15432', '25143',"42351"], correct: '15432' },
            { question: '1. do	2. today	3. you  4. must	5. it	 ', options: ['34152', '25413', '12543',"51324"], correct: '34152' },
            { question: '1. medicine	2. a	3. Neeta 4. given	5. was', options: ['51423', '25431', '15423',"35421"], correct: '35421' },
            { question: 'You need not come unless you want to.', options: ['You dont need to come unless you want to', 'You come unless you dont want to', 'No correction required',"No correction required"], correct: 'You dont need to come unless you want to' },
            { question: 'The man to who I sold my house was a cheat.', options: ['to whom I sell', 'to who I sell', 'No correction required',"to whom I sold"], correct: 'to whom I sold' },
            { question: 'He is too important for tolerating any delay.', options: ['to tolerate', 'to tolerating', 'with tolerating',"at tolerating"], correct: 'to tolerate' },
            { question: 'They are not beware of all the facts', options: ['are not aware for', 'are not aware of', 'must not to be aware for',"No correction required"], correct: 'are not aware of' },
            { question: 'The brain of any computer system is', options: ['ALU', 'Memory', 'CPU',"Control unit"], correct: 'CPU' },
            { question: 'A device that converts mechanical into electrical energy is?', options: ['solar cell', 'thermocouple', 'chemical cell',"generator"], correct: 'generator' },
            { question: 'Which of the following is used in pencils?', options: ['Graphite', 'silicon', 'charcoal',"phosphorus"], correct: 'Graphite' },
            { question: 'Chemical formula for water is', options: ['NaAlO2', 'H2O', 'Al2O3',"CaSiO3"], correct: 'H2O' },
            { question: 'Washing soda is the common name for', options: ['Sodium carbonate', 'Calcium bicarbonate', 'Sodium bicarbonate',"Calcium carbonate"], correct: 'Sodium carbonate' },
            { question: 'Which of the gas is not known as green house gas?', options: ['Nitrous oxide', 'Methane', 'Carbon dioxide',"Hydrogen"], correct: 'Methane' },
            { question: '19 * 6', options: ['116', '126', '114',"156"], correct: '114' },
            { question: ' What does the abbreviation HTML stand for? ', options: [' Hypertext Markup Language. ', 'Hypertext Markdown Language.', 'High Text Markup Language. '," None of the above"], correct: 'Hypertext Markup Language.' },
            { question: 'RAM stands for:- ', options: [' Random Access Memory ', 'Runtime Access Memory', 'Runtime Authenticate Memory ',"Random Authenticate Memory"], correct: 'Random Access Memory' },
            { question: 'Which of the following software is used for making resume?', options: [' MS Excel ', 'MS Word', 'Dev C ',"Java"], correct: 'MS Word' },
            { question: 'ROM Stand for:-', options: [' Read Only Memory', 'Random Only Memory', 'Random only on memory',"Java"], correct: 'Read Only Memory' },
            { question: 'COMPUTER stand for:-', options: [' Common Operating Machine Purposely Used for Technological and Educational Research', 'Common Operating Machine Purposely Used for Technological  Educational Research', 'Computer Operating Machine Purposely Used for Technological and Educational Research',"Java"], correct: 'Common Operating Machine Purposely Used for Technological and Educational Research' },
            { question: 'Computer word come from:-', options: ['Binary', 'Compute', 'Dev C ',"programming"], correct: 'Compute' },
            { question: 'Computer Understand which language:-', options: ['Binary', 'JAVA', 'Dev C ',"C++"], correct: 'Binary' },
            { question: 'LAN Stands for:-', options: ['Local Area Network', 'Logical Area Network', 'Logical Area Networking ',"Local Area Networking"], correct: 'Local Area Network' },
            { question: 'WAN Stands for:-:-', options: ['Wide Area Network', 'Widly Area Network', 'Widly Area Networking ',"wide Area Networking"], correct: 'Wide Area Network' },
            //check
            { question: ' Arrange the words given below in a meaningful sequence.   1.Presentation   2. Recommendation   3. Arrival   4. Discussion  5. Introduction   ', options: ['5, 3, 4, 1, 2', '3, 5, 4, 2, 1', '3, 5, 1, 4, 2',"5, 3, 1, 2, 4"], correct: '3, 5, 1, 4, 2' },

            { question: ' What is the capital of India?', options: ['Mumbai', 'Himachal Pradesh', 'Delhi', 'Punjab'], correct: 'Delhi' },
            { question: ' The Arithmetic mean of 5, 10, 12, 18, 20 is:', options: ['5', ' 13', '25', '55'], correct: '13' },
            { question: ' 7 8 15 24 35 48 63 _?', options: ['70', ' 75', '80', '55'], correct: '80' },
            { question: ' A / B = C; C > D then', options: ['A is always greater than D', ' C is always greater than D', 'B is always less than D', 'None'], correct: 'A is always greater than D' },
            { question: ' Which of the following numbers is divisible by 3? (i) 541326 (ii) 5967013', options: ['(ii) only', '(i) only', '(i) and (ii) both', '(i) and (ii) none'], correct: '(i) only' },
            { question: ' 12 1,2,6,24,_?', options: ['111', '151', '120', '125'], correct: '120' },
            { question: ' Choose the pair of numbers which comes next 75 65 85 55 45 85 35', options: ['25 15', '25 85 ', '35 25 ', '35 85'], correct: '25 85' },
            { question: ' Which word does NOT belong with the others?', options: ['Tyre', 'steering wheel', 'engine ', 'car'], correct: 'car' },
            { question: ' Which word does NOT belong with the others?', options: ['heading', 'body ', 'letter ', 'closing'], correct: 'letter' },
            { question: ' Which word does NOT belong with the others?', options: ['leopard', 'cougar ', 'elephant', 'lion'], correct: 'elephant' },
            { question: ' Cup is to coffee as bowl is to', options: ['dish', 'soup ', 'spoon', 'food'], correct: 'soup' },
            { question: ' Play is to actor as concert is to', options: ['symphony', 'musician ', 'piano', 'percussion'], correct: 'musician' },
            { question: ' Sponge is to porous as rubber is to', options: ['massive', 'solid ', 'elastic', 'inflexible'], correct: 'elastic' },
            { question: ' Careful is to cautious as boastful is to', options: ['arrogant', 'humble ', 'joyful', 'suspicious'], correct: 'arrogant' },
            { question: ' SCD, TEF, UGH, ____, WKL', options: ['CMN', 'UJI ', 'VIJ', 'IJT'], correct: 'VIJ' },
            { question: ' B2CD, _____, BCD4, B5CD, BC6D', options: ['B2C2D', 'BC3D ', 'B2C3D', 'BCD7'], correct: 'BC3D' },
            { question: ' ELFA, GLHA, ILJA, _____, MLNA', options: ['OLPA', 'KLMA ', 'LLMA', 'KLLA'], correct: 'KLLA' },
            { question: ' CMM, EOO, GQQ, _____, KUU', options: ['GRR', 'GSS ', 'ISS', 'ITT'], correct: 'ISS' },
            { question: ' Exercise is to gym as eating is to', options: ['food', 'dieting ', 'fitness', 'restaurant'], correct: 'restaurant' },
            { question: ' What is smallest unit of the information?', options: ['A bit', 'A byte ', 'A block', 'A nibble'], correct: 'A bit' },
            { question: ' Which of the following is an output device?', options: ['Keyboard', 'Mouse ', 'Light pen', 'VDU'], correct: 'VDU' },
            { question: ' BIOS is used?', options: ['By operating system', 'By compiler ', 'By interpreter', 'By application software'], correct: 'By operating system' },
            //check
            

           

        ]

    },

];




// Handle login form submission

document.getElementById('loginForm').addEventListener('submit', function(event) {

    event.preventDefault();

    const username = document.getElementById('username').value;

    const password = document.getElementById('password').value;




    // Validate login credentials

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {

        document.getElementById('login').style.display = 'none';

        document.getElementById('exam').style.display = 'block';

        loadQuestions(user.exam);

    } else {

        alert('Invalid login');

    }

});




// Load questions based on the logged-in user

function loadQuestions(questions) {

    const questionsContainer = document.getElementById('questions');

    questionsContainer.innerHTML = ''; // Clear previous questions




    questions.forEach((q, index) => {

        const questionDiv = document.createElement('div');

        questionDiv.innerHTML = `

            <p>${q.question}</p>

            ${q.options.map(option => `

                <label>

                    <input type="radio" name="q${index}" value="${option}">

                    ${option}

                </label>

            `).join('<br>')}

        `;

        questionsContainer.appendChild(questionDiv);

    });

}




// Handle exam submission

document.getElementById('submitExam').addEventListener('click', function() {

    const user = users.find(u => u.username === document.getElementById('username').value);

    const questions = user.exam;




    let score = 0;

    

    questions.forEach((q, index) => {

        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);

        if (selectedOption && selectedOption.value === q.correct) {

            score++;

        }

    });




    const resultDiv = document.getElementById('result');
    const view = document.getElementById('view');

    resultDiv.innerHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>`;

    resultDiv.style.display = 'block';
    view.style.display = 'block';
    

});
  