import validator from "is_js";

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return "";
  }
};

const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return `please enter valid ${key}`;
  } else {
    return "";
  }
};

export default function (data) {
  const {
    student_name,
    student_corp_emailId,
    student_mob_no,
    empid,
    student_batch_code,

    student_personal_emailId,
  } = data;

  if (student_name !== undefined) {
    let emptyValidationText = checkEmpty(
      student_name,
      "please Enter your user name"
    );

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(student_name, 3, "userName");
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }

  if (student_corp_emailId !== undefined) {
    let emptyValidationText = checkEmpty(
      student_corp_emailId,
      "please Enter your student_corp_emailId"
    );

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        student_corp_emailId,
        3,
        "userName"
      );
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }

  if (student_personal_emailId !== undefined) {
    let emptyValidationText = checkEmpty(
      student_personal_emailId,
      "please Enter your student_corp_emailId"
    );

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        student_personal_emailId,
        3,
        "userName"
      );
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }
  // if (student_corp_emailId !== undefined) {
  //   let emptyValidationText = checkEmpty(
  //     student_corp_emailId,
  //     "please Enter your student_corp_emailId"
  //   );

  //   if (emptyValidationText !== "") {
  //     return emptyValidationText;
  //   } else {
  //     if (!validator.student_corp_emailId(student_corp_emailId)) {
  //       return "please enter valid student_corp_emailId";
  //     }
  //   }
  // }

  // if (student_personal_emailId !== undefined) {
  //   let emptyValidationText = checkEmpty(
  //     student_personal_emailId,
  //     "please Enter your student_personal_emailId"
  //   );

  //   if (emptyValidationText !== "") {
  //     return emptyValidationText;
  //   } else {
  //     if (!validator.studentersonal_emailId(student_personal_emailId)) {
  //       return "please enter valid student_personal_emailId";
  //     }
  //   }
  // }

  if (student_mob_no !== undefined) {
    let emptyValidationText = checkEmpty(
      student_mob_no,
      "please Enter your mobile number"
    );

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        student_mob_no,
        8,
        "student_mob_no"
      );
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }

  if (student_batch_code !== undefined) {
    let emptyValidationText = checkEmpty(
      student_batch_code,
      "please Enter your user name"
    );

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(
        student_batch_code,
        3,
        "userName"
      );
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }
  if (empid !== undefined) {
    let emptyValidationText = checkEmpty(empid, "please Enter your empid");

    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      let minLengthValidation = checkMinLength(empid, 8, "empid");
      if (minLengthValidation !== "") {
        return minLengthValidation;
      }
    }
  }

  // if (superSetId !== undefined) {
  //   let emptyValidationText = checkEmpty(
  //     superSetId,
  //     "please Enter your password"
  //   );

  //   if (emptyValidationText !== "") {
  //     return emptyValidationText;
  //   } else {
  //     let minLengthValidation = checkMinLength(superSetId, 8, "superSetId");
  //     if (minLengthValidation !== "") {
  //       return minLengthValidation;
  //     }
  //   }
  // }
}
