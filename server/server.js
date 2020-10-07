const express = require('express');
const app = express();
const port = 5000;

const apiinfo = 
        {
            "main": {
              "name":"GABRIEL WONG",
              "description":"System Consultant | Software Engineer ..",
              "image":"profilepicv1.jpg",
              "bio":"Hello! I'm Gabriel Wong, a software engineer based in Singapore. Shortly after graduating from Nanyang Technological University, I joined the consultant team at BAE Systems Applied Intelligence where i work on a variety of government projects providing application support on a daily basis.",
              "bio2":"Interested in Software Engineer, Full/Back Stack, Web and Mobile Application Developer role. Contact me at gabrielwzh@gmail.com",
              "email": "mailto:gabrielwzh@gmail.com"
            },
            "resume":{
              "education":[
                {
                  "school":"Nanyang Technological University",
                  "degree":"B.Eng. (Hons) Electrical & Electronic Engineering (Direct Y2)",
                  "graduated":"Aug 2017 - May 2020",
                  "description":"Specialised in Computer Engineering. Developed a hybrid cross-platform development for web and mobile, Android, iOS application during Final Year Project to enhance mentoring system. Machine learning action recognition application with neural network and kaggle hand gesture to detect potential symptoms with Internet of Things. GEM Discovery summer exchange programme in Sungkyunkwan University. Main committee in various student bodies to boost self-confidence and sculpture leadership quality. "
                },
                {
                  "school":"Ngee Ann Polytechnic",
                  "degree":"Diploma, Network System & Security",
                  "graduated":"Apr 2012 - Apr 2015",
                  "description":"Network fundamentals with knowledge in CCNA routing and switching. Expertise in cyber security, cloud computing and network design. Six-month internship with OneBerry Technologies to integrate smart surveillance cameras in various government projects. Vice-President, student ambassador of NSS Club and participated in Cisco Netriders competition."
                }
              ],
              "work":[
                {
                  "company":"BAE Systems Applied Intelligence",
                  "title":"System Consultant",
                  "years":"May 2020 - Present",
                  "description":"System Integration providing technical delivery solutions for governments and telecommunication comapnies. Service level agreement, L3 application software support, debug product and application, jira, confluence, sap, active directory, tcp/ip, shell scripting, rdbms sql, oracle database, windows server and linux administration."
                },
                {
                  "company":"ST Engineering",
                  "title":"Software Engineer",
                  "years":"Jan 2019 - Aug 2019",
                  "description": "Involved in embedded software application production, agile scrum methodology, unit test, troubleshoot, backup, restore and communicate with external parties. C# programming language with .NET framework, windows server 2012/2016, bitlocker, hardening, registry editor and powershell. "
                }
              ]
            }
          }



app.get('/api/v1', (req, res) => { 
     res.send(apiinfo);
});

app.get('/api/v1/main', (req, res) => { 
    res.send(apiinfo.main);
});

app.get('/api/v1/resume', (req, res) => { 
    res.send(apiinfo.resume);
});

app.get('/api/v1/resume/education', (req, res) => { 
    res.send(apiinfo.resume.education);
});

app.get('/api/v1/resume/work', (req, res) => { 
    res.send(apiinfo.resume.work);
});

// app.get('/api/v2/:id', (req, res) => { 
//     res.send(req.params.id);
//  // res.send(req.query); '/api/v2/1?name=abc'
// });


app.listen(port, () => { console.log(`Server started on port ${port}`) });