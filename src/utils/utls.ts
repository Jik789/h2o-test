function isSubstringIgnoreCase(mainString: string, subString: string) {
  const lowerCaseMainString = mainString.toLowerCase();
  const lowerCaseSubString = subString.toLowerCase();
  return lowerCaseMainString.includes(lowerCaseSubString);
}

function generateObjects(count: number) {
  const objects = [];

  for (let i = 0; i < count; i++) {
    const object = {
      mainInfo: {
        userName: generateRandomName(),
        userID: generateRandomID(),
        userTelephone: generateRandomTelephone(),
        userSex: generateRandomSex(),
        userBirthday: generateRandomBirthday(),
        userMetro: generateRandomMetro(),
        userAddress: generateRandomAddress(),
      },
      bankInfo: {
        userBank: generateRandomBank(),
        userCardNumber: generateRandomCardNumber(),
        userCardValidDate: generateRandomCardValidDate(),
      },
      HrInfo: {
        userPost: generateRandomJobTitle(),
        userDivision: generateRandomDivision(),
        userSolution: generateRandomSolution(),
        userSource: generateRandomSource(),
        userSolutionDate: generateRandomSolutionDate(),
        userNote: generateRandomNote(),
      },
    };

    objects.push(object);
  }

  return objects;
}

// Генерация случайного имени
function generateRandomName() {
  const names = [
    'John',
    'Emma',
    'Liam',
    'Olivia',
    'Noah',
    'Ava',
    'Sophia',
    'James',
    'Mia',
    'Benjamin',
    'Charlotte',
    'William',
    'Amelia',
    'Elijah',
    'Harper',
  ];
  const surnames = [
    'Smith',
    'Johnson',
    'Williams',
    'Jones',
    'Brown',
    'Davis',
    'Miller',
    'Wilson',
    'Moore',
    'Taylor',
    'Anderson',
    'Thomas',
    'Jackson',
    'White',
    'Harris',
  ];
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
  return `${randomName} ${randomSurname}`;
}

// Генерация случайного ID
function generateRandomID() {
  return Math.floor(Math.random() * 1000000) + 1;
}

// Генерация случайного телефона
function generateRandomTelephone() {
  const randomDigits = Math.floor(Math.random() * 10000000000);
  return String(randomDigits).padStart(10, '0');
}

// Генерация случайного пола
function generateRandomSex() {
  const sexes = ['Male', 'Female'];
  return sexes[Math.floor(Math.random() * sexes.length)];
}

// Генерация случайной даты рождения
function generateRandomBirthday() {
  const start = new Date(1970, 0, 1);
  const end = new Date(2004, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  return `${day}.${month}.${year}`;
}

// Генерация случайной станции метро
function generateRandomMetro() {
  const metros = ['Metro Station 1', 'Metro Station 2', 'Metro Station 3'];
  return metros[Math.floor(Math.random() * metros.length)];
}

// Генерация случайного адреса
function generateRandomAddress() {
  const addresses = ['123 Street, City', '456 Avenue, Town', '789 Road, Village'];
  return addresses[Math.floor(Math.random() * addresses.length)];
}

// Генерация случайного банка
function generateRandomBank() {
  const banks = ['Bank A', 'Bank B', 'Bank C'];
  return banks[Math.floor(Math.random() * banks.length)];
}

// Генерация случайного номера карты
function generateRandomCardNumber() {
  const randomDigits = Math.floor(Math.random() * 10000000000000000);
  return String(randomDigits).padStart(16, '0');
}

// Генерация случайной должности
function generateRandomJobTitle() {
  const jobTitles = ['Manager', 'Engineer', 'Developer', 'Designer', 'Analyst'];
  return jobTitles[Math.floor(Math.random() * jobTitles.length)];
}

// Генерация случайного подразделения
function generateRandomDivision() {
  const divisions = ['Division A', 'Division B', 'Division C'];
  return divisions[Math.floor(Math.random() * divisions.length)];
}

// Генерация случайного решения
function generateRandomSolution() {
  const solutions = ['Solution 1', 'Solution 2', 'Solution 3'];
  return solutions[Math.floor(Math.random() * solutions.length)];
}

// Генерация случайного источника
function generateRandomSource() {
  const sources = ['Source 1', 'Source 2', 'Source 3'];
  return sources[Math.floor(Math.random() * sources.length)];
}

// Генерация случайной даты решения
function generateRandomSolutionDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date(2025, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Генерация случайной даты решения
function generateRandomCardValidDate() {
  const start = new Date(2022, 0, 1);
  const end = new Date(2025, 11, 31);
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Генерация случайных заметок
function generateRandomNote() {
  const notes = ['Note 1', 'Note 2', 'Note 3'];
  return notes[Math.floor(Math.random() * notes.length)];
}

function isDateExpired(date: string) {
  const currentDate = new Date();
  const inputDate = new Date(date);

  currentDate.setHours(0, 0, 0, 0);
  inputDate.setHours(0, 0, 0, 0);

  return inputDate < currentDate;
}

function isUnitPath(path: string) {
  return path.startsWith('/unit/');
}

export { isSubstringIgnoreCase, generateObjects, isDateExpired, isUnitPath };
