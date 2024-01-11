$(document).ready(function() {
    $("#anskey-submit").click(function(e) {
        e.preventDefault();
        var ans_key_url = $("#ans-key-url").val();
        ans_key_url = ans_key_url.split(".html");
        ans_key_url = ans_key_url[0] + ".html";
        var category = $("#category").val();
        var category_2 = $("#category-2").val();
        var key_pwd = $("#key-pwd").val();
        var aspirant_group = 'none';
        var request_pages = ['php/anskeybridge.php'];
        var request_page = request_pages[Math.floor(Math.random() * request_pages.length)];
        if (request_page == "" || request_page == null || request_page == undefined) {
            request_page = "php/anskey.php";
        }
        console.log(request_page);
        $.ajax({
            type: "POST",
            url: request_page,
            data: {
                ans_key_url: ans_key_url
            },
            cache: false,
            beforeSend: function() {
                $("#anskey-submit").val("getting data...");
            },
            success: function(response) {
                console.log(response);
                var response = JSON.parse(response);
                $("#anskey-submit").val("Submit");
                if (response[0].trim() == "data-received") {
                    $("#show-answer-key").html(response[1].replaceAll('src="/per', 'src="https://ssc.digialm.com///per'));
                    var dom_parser = new DOMParser();
                    dom_parser = dom_parser.parseFromString(response[1], "text/html");
                    var cand_info = dom_parser.getElementsByTagName("table")[0];
                    cand_info = cand_info.getElementsByTagName("td");
                    var roll_no = cand_info[1].textContent;
                    var cand_name = cand_info[3].textContent;
                    var venue_name = cand_info[5].textContent;
                    var exam_date = cand_info[7].textContent;
                    var exam_time = cand_info[9].textContent;
                    var subject = cand_info[11].textContent;
                    var questions = "";
                    var save_marks = "";
                    var eachqueposmarks = 2;
                    var eachquenegmarks = 0.5;
                    var grab_url = window.location.href;
                    var url = new URL(grab_url);
                    var url_source = url.searchParams.get("source");
                    var url_aspg = url.searchParams.get("aspg");
                    var posm = url.searchParams.get("posm");
                    var negm = url.searchParams.get("negm");
                    var exam_id = url.searchParams.get("examid");
                    if (url_aspg != null) {
                        aspirant_group = url_aspg;
                    }
                    if (posm == null) {
                        posm = 'NULL';
                    }
                    if (negm == null) {
                        negm = 'NULL';
                    }
                    if (exam_id == null) {
                        exam_id = 'NULL';
                    }
                    if (url_source != null) {
                        var user_source = url_source;
                        localStorage.setItem('source', url_source);
                    } else {
                        if (localStorage.getItem("source") != null) {
                            var user_source = "after_" + localStorage.getItem("source");
                        } else {
                            var user_source = "none";
                        }
                    }
                    if (subject.toLowerCase().includes("")) {
                        var wrapper = dom_parser.getElementsByClassName("wrapper")[0];
                        var get_grps = wrapper.getElementsByClassName("grp-cntnr");
                        var totalMarks = 0;
                        var marks_data = {
                            groups: []
                        };
                        marks_data.personal_details = {
                            cand_name: cand_name,
                            roll_no: roll_no,
                            venue_name: venue_name,
                            exam_date: exam_date,
                            exam_time: exam_time,
                            subject: subject,
                            category: category
                        };
                        marks_data.total_marks = 0;
                        marks_data.bonus = 0;
                        marks_data.right = 0;
                        marks_data.wrong = 0;
                        marks_data.attempted = 0;
                        marks_data.not_attempted = 0;
                        for (var i = 0; i < get_grps.length; i++) {
                            marks_data['groups'].push({});
                            marks_data['groups'][i]['group_name'] = "Group-" + (i + 1);
                            marks_data['groups'][i]['total_marks'] = 0;
                            marks_data['groups'][i]['bonus'] = 0;
                            marks_data['groups'][i]['right'] = 0;
                            marks_data['groups'][i]['wrong'] = 0;
                            marks_data['groups'][i]['attempted'] = 0;
                            marks_data['groups'][i]['not_attempted'] = 0;
                            marks_data['groups'][i]['subjects'] = [];
                            var get_sect = get_grps[i].getElementsByClassName("section-cntnr");
                            for (var j = 0; j < get_sect.length; j++) {
                                var get_sect_name = get_sect[j].getElementsByClassName("section-lbl")[0].getElementsByTagName("span")[1].textContent;
                                var get_sect_ques = get_sect[j].getElementsByClassName("question-pnl");
                                var right = 0
                                  , notAttempted = 0
                                  , bonus = 0;
                                marks_data['groups'][i]['subjects'].push({});
                                marks_data['groups'][i]['subjects'][j]['subject_name'] = get_sect_name;
                                marks_data['groups'][i]['subjects'][j]['total_marks'] = 0;
                                marks_data['groups'][i]['subjects'][j]['right'] = 0;
                                marks_data['groups'][i]['subjects'][j]['wrong'] = 0;
                                marks_data['groups'][i]['subjects'][j]['attempted'] = 0;
                                marks_data['groups'][i]['subjects'][j]['not_attempted'] = 0;
                                marks_data['groups'][i]['subjects'][j]['bonus'] = 0;
                                for (var k = 0; k < get_sect_ques.length; k++) {
                                    var choosen_opt_index = get_sect_ques[k].getElementsByClassName("menu-tbl")[0].getElementsByTagName("tr").length;
                                    choosen_opt_index = choosen_opt_index + 2;
                                    var choosen_opt = get_sect_ques[k].getElementsByClassName("bold")[choosen_opt_index].textContent;
                                    try {
                                        var right_opt = get_sect_ques[k].getElementsByClassName("rightAns")[0].textContent[0];
                                        if (" -- " === choosen_opt) {
                                            notAttempted++;
                                            marks_data['not_attempted'] += 1;
                                            marks_data['groups'][i]['not_attempted'] += 1;
                                            marks_data['groups'][i]['subjects'][j]['not_attempted'] += 1;
                                        } else {
                                            if (right_opt === choosen_opt) {
                                                right++;
                                                marks_data['total_marks'] += eachqueposmarks;
                                                marks_data['right'] += 1;
                                                marks_data['groups'][i]['total_marks'] += eachqueposmarks;
                                                marks_data['groups'][i]['right'] += 1;
                                                marks_data['groups'][i]['subjects'][j]['total_marks'] += eachqueposmarks;
                                                marks_data['groups'][i]['subjects'][j]['right'] += 1;
                                            } else {
                                                marks_data['total_marks'] -= eachquenegmarks;
                                                marks_data['wrong'] += 1;
                                                marks_data['groups'][i]['total_marks'] -= eachquenegmarks;
                                                marks_data['groups'][i]['wrong'] += 1;
                                                marks_data['groups'][i]['subjects'][j]['total_marks'] -= eachquenegmarks;
                                                marks_data['groups'][i]['subjects'][j]['wrong'] += 1;
                                            }
                                            marks_data['attempted'] += 1;
                                            marks_data['groups'][i]['attempted'] += 1;
                                            marks_data['groups'][i]['subjects'][j]['attempted'] += 1;
                                        }
                                    } catch {
                                        bonus++;
                                        marks_data['total_marks'] += eachqueposmarks;
                                        marks_data['bonus'] += 1;
                                        marks_data['groups'][i]['total_marks'] += eachqueposmarks;
                                        marks_data['groups'][i]['bonus'] += 1;
                                        marks_data['groups'][i]['subjects'][j]['total_marks'] += eachqueposmarks;
                                        marks_data['groups'][i]['subjects'][j]['bonus'] += 1;
                                    }
                                }
                                var wrong = get_sect_ques.length - notAttempted - right - bonus;
                                marks = (right + bonus) * eachqueposmarks - wrong * eachquenegmarks;
                                totalMarks += marks;
                                save_marks += marks + "##";
                                if (get_sect.length == (j + 1) && get_grps.length == (i + 1)) {
                                    questions += (get_sect_ques.length - notAttempted) + "##" + notAttempted + "##" + right + "##" + wrong + "##" + bonus + "##" + marks + "=" + totalMarks;
                                } else {
                                    questions += (get_sect_ques.length - notAttempted) + "##" + notAttempted + "##" + right + "##" + wrong + "##" + bonus + "##" + marks + "|";
                                }
                                console.log("Subject : " + (j + 1) + "\nAttempted : " + (get_sect_ques.length - notAttempted) + "\nRight Answers : " + right + "\nWrong Answers : " + wrong + "\nBonus : " + bonus + "\nMarks : " + marks);
                            }
                        }
                        totalMarks = totalMarks.toFixed(2);
                        save_marks += totalMarks;
                        var anskey_info = {
                            ans_key_url: ans_key_url,
                            category: category,
                            category_2: category_2,
                            key_pwd: key_pwd,
                            aspirant_group: aspirant_group,
                            roll_no: roll_no,
                            cand_name: cand_name,
                            venue_name: venue_name,
                            exam_id: exam_id,
                            exam_date: exam_date,
                            exam_time: exam_time,
                            subject: subject,
                            marks_data: JSON.stringify(marks_data),
                            questions: questions,
                            save_marks: save_marks,
                            total_marks: totalMarks,
                            user_source: user_source,
                            posm: posm,
                            negm: negm
                        };
                        $.ajax({
                            type: "POST",
                            url: "php/anskey_eval.php",
                            data: {
                                anskey_info: anskey_info
                            },
                            cache: false,
                            beforeSend: function() {
                                $("#anskey-submit").val("Calculating...");
                            },
                            success: function(get_response) {
                                var get_response = JSON.parse(get_response);
                                $("#anskey-submit").val("Done");
                                if (get_response[0] == "stored") {
                                    location.href = "https://rankmitra.in/r/all/rank.php";
                                } else {
                                    console.log(get_response[0]);
                                }
                            },
                            error: function() {
                                $("#anskey-submit").val("Refresh And Try Again");
                                alert("Oops! Refresh or Try After Some Time 😕.");
                            }
                        });
                    } else {
                        alert("Are you sure answer key you submitting is of --- exam.");
                    }
                } else {
                    $("#anskey-submit").val("Try Again!!");
                    console.log(response);
                }
            },
            error: function() {
                $("#anskey-submit").val("Try Again! 😕");
            }
        });
    });
});
$(document).ready(function() {
    $("#rollno-form").submit(function(e) {
        e.preventDefault();
        var login_roll = $("#roll-no").val();
        var login_pwd = $("#login-pwd").val();
        $.ajax({
            type: "POST",
            url: "php/rollnologin.php",
            data: {
                login_roll: login_roll,
                login_pwd: login_pwd
            },
            beforeSend: function() {
                $("#submit-rollno").text("Submitting...");
            },
            success: function(roll_response) {
                $("#submit-rollno").text("Submit");
                console.log(roll_response);
                if (roll_response.trim() == "logged-in") {
                    location.href = "https://rankmitra.in/r/all/rank.php";
                } else {
                    alert(roll_response.trim());
                }
            }
        });
    });
});
$(document).ready(function() {
    var grab_url = window.location.href;
    var url = new URL(grab_url);
    var url_source = url.searchParams.get("source");
    if (url_source != null) {
        localStorage.setItem('source', url_source);
    }
});
