var groupmates = [
    {
        "name": "Максим",
        "surname": "Агарков",
        "group": "БФИ1900",
        "marks": [4, 3, 5]
    },

    {

        "name": "Никита",
        "surname": "Кочеринский",
        "group": "БФИ1901",
        "marks": [4, 4, 4]
    },

    {
        "name": "Егор",
        "surname": "Шацкий",
        "group": "БФИ1902",
        "marks": [5, 5, 5]
    }
];

var rpad = function(str, length) {
	// js не поддерживает добавление нужного количества символов
	// справа от строки, т.е. аналога ljust из Python здесь нет 
	str = str.toString(); // преобразование в строку
	while (str.length < length)
		str = str + ' '; // добавление пробела в конец строки 
	return str; // когда все пробелы добавлены, возвратить строку
};

var printStudents = function(students){ 
	console.log(
		rpad("Имя", 15),
		rpad("Фамилия", 15),
		rpad("Группа", 8),
		rpad("Оценки", 20)
	);
	// был выведен заголовок таблицы
	for (var i = 0; i<=students.length-1; i++){
		// в цикле выводится каждый экземпляр студента 
		console.log(
			rpad(students[i]["name"], 15),
			rpad(students[i]["surname"], 15),
			rpad(students[i]["group"], 8),
			rpad(students[i]["marks"], 20)
		);
	}
	console.log('\n'); // добавляется пустая строка в конце вывода
};

printStudents(groupmates); 

let groupFilter = () => {
  let group = prompt("Введите группу");
  let newGroups = groupmates.filter((item) => item["group"] == group);
  if (newGroups.length == 0) {
    console.log("Студентов из такой группы нет");
  } else {
    printStudents(newGroups);
  }
};

let marksFilter = () => {
  let marks = +prompt("Введите среднюю оценку");
  let newMarks = groupmates.filter(
    (item) =>
      item["marks"].reduce((prev, next) => prev + next) /
        item["marks"].length >=
      marks
  );

  if (newMarks.length == 0) {
    console.log("Студентов с таким средним баллом нет");
  } else {
    printStudents(newMarks);
  }
};