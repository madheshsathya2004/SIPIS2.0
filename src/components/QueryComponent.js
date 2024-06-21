// src/components/QueryComponent.js

import React, { useState, useEffect } from "react";
import "./QueryComponent.css";

const fields1991 = [
  { id: "T_POPULAT,N,12,0", label: "Total Population" },
  { id: "DENSITY,N,10,0", label: "Density" },
  { id: "HOUSEHOLDS,N,14,0", label: "Households" },
  { id: "PERS/HOUSE,N,13,1", label: "Persons per Household" },
  { id: "MALE_POP,N,12,0", label: "Male Population" },
  { id: "FEMALE_POP,N,13,0", label: "Female Population" },
  { id: "SR_POPULAT,N,13,0", label: "Sex Ratio" },
  { id: "T_CHILDREN,N,12,0", label: "Total Children" },
  { id: "M_CHILDREN,N,12,0", label: "Male Children" },
  { id: "F_CHILDREN,N,12,0", label: "Female Children" },
  { id: "SR_CHILDRE,N,12,0", label: "Sex Ratio Children" },
  { id: "T_SC,N,8,0", label: "Total SC" },
  { id: "T%_SC,N,8,2", label: "Percentage SC" },
  { id: "M_SC,N,7,0", label: "Male SC" },
  { id: "F_SC,N,7,0", label: "Female SC" },
  { id: "SR_SC,N,8,0", label: "Sex Ratio SC" },
  { id: "T_ST,N,7,0", label: "Total ST" },
  { id: "T%_ST,N,8,2", label: "Percentage ST" },
  { id: "M_ST,N,7,0", label: "Male ST" },
  { id: "F_ST,N,6,0", label: "Female ST" },
  { id: "SR_ST,N,8,0", label: "Sex Ratio ST" },
  { id: "T_LITTERAT,N,11,0", label: "Total Literate" },
  { id: "T%_LITTERA,N,12,2", label: "Percentage Literate" },
  { id: "M_LITTERAT,N,12,0", label: "Male Literate" },
  { id: "F_LITTERAT,N,11,0", label: "Female Literate" },
  { id: "SR_LITTERA,N,12,0", label: "Sex Ratio Literate" },
  { id: "T_WORKERS,N,13,0", label: "Total Workers" },
  { id: "T%_WORKERS,N,14,2", label: "Percentage Workers" },
  { id: "M_WORKERS,N,14,0", label: "Male Workers" },
  { id: "F_WORKERS,N,14,0", label: "Female Workers" },
  { id: "SR_WORKERS,N,14,0", label: "Sex Ratio Workers" },
  { id: "T_MARGINAL,N,12,0", label: "Total Marginal Workers" },
  { id: "T%_MARGINA,N,13,2", label: "Percentage Marginal Workers" },
  { id: "M_MARGINAL,N,13,0", label: "Male Marginal Workers" },
  { id: "F_MARGINAL,N,12,0", label: "Female Marginal Workers" },
  { id: "SR_MARGINA,N,13,0", label: "Sex Ratio Marginal Workers" },
  { id: "T_NONWORK,N,14,0", label: "Total Non-Workers" },
  { id: "T%_NONWORK,N,14,2", label: "Percentage Non-Workers" },
  { id: "M_NONWORK,N,14,0", label: "Male Non-Workers" },
  { id: "F_NONWORK,N,14,0", label: "Female Non-Workers" },
  { id: "SR_NONWORK,N,14,0", label: "Sex Ratio Non-Workers" },
  { id: "T_PRIMARY,N,12,0", label: "Total Primary Workers" },
  { id: "T%_PRIMARY,N,13,2", label: "Percentage Primary Workers" },
  { id: "M_PRIMARY,N,13,0", label: "Male Primary Workers" },
  { id: "F_PRIMARY,N,12,0", label: "Female Primary Workers" },
  { id: "SR_PRIMARY,N,13,0", label: "Sex Ratio Primary Workers" },
  { id: "T_SECUND,N,11,0", label: "Total Secondary Workers" },
  { id: "T%_SECUND,N,13,2", label: "Percentage Secondary Workers" },
  { id: "M_SECUND,N,12,0", label: "Male Secondary Workers" },
  { id: "F_SECUND,N,12,0", label: "Female Secondary Workers" },
  { id: "SR_SECUND,N,13,0", label: "Sex Ratio Secondary Workers" },
  { id: "T_TERTIARY,N,12,0", label: "Total Tertiary Workers" },
  { id: "T%_TERTIAR,N,12,2", label: "Percentage Tertiary Workers" },
  { id: "M_TERTIARY,N,12,0", label: "Male Tertiary Workers" },
  { id: "F_TERTIARY,N,12,0", label: "Female Tertiary Workers" },
  { id: "SR_TERTIAR,N,12,0", label: "Sex Ratio Tertiary Workers" },
  { id: "T_CULTIVAT,N,11,0", label: "Total Cultivators" },
  { id: "T%_CULTIVA,N,12,2", label: "Percentage Cultivators" },
  { id: "M_CULTIVAT,N,12,0", label: "Male Cultivators" },
  { id: "F_CULTIVAT,N,11,0", label: "Female Cultivators" },
  { id: "SR_CULTIVA,N,12,0", label: "Sex Ratio Cultivators" },
  { id: "T_AGRI_LAB,N,12,0", label: "Total Agricultural Laborers" },
  { id: "T%_AGRI_LA,N,12,2", label: "Percentage Agricultural Laborers" },
  { id: "M_AGRI_LAB,N,12,0", label: "Male Agricultural Laborers" },
  { id: "F_AGRI_LAB,N,12,0", label: "Female Agricultural Laborers" },
  { id: "SR_AGRI_LA,N,12,0", label: "Sex Ratio Agricultural Laborers" },
  { id: "T_FISH_FOR,N,12,0", label: "Total Fishery Workers" },
  { id: "T%_FISH_FO,N,12,2", label: "Percentage Fishery Workers" },
  { id: "M_FISH_FOR,N,12,0", label: "Male Fishery Workers" },
  { id: "F_FISH_FOR,N,12,0", label: "Female Fishery Workers" },
  { id: "SR_FISH_FO,N,12,0", label: "Sex Ratio Fishery Workers" },
  { id: "T_MINING,N,10,0", label: "Total Mining Workers" },
  { id: "T%_MINING,N,12,2", label: "Percentage Mining Workers" },
  { id: "M_MINING,N,11,0", label: "Male Mining Workers" },
  { id: "F_MINING,N,10,0", label: "Female Mining Workers" },
  { id: "SR_MINING,N,12,0", label: "Sex Ratio Mining Workers" },
  { id: "T_HH_INDUS,N,12,0", label: "Total Household Industry Workers" },
  { id: "T%_HH_INDU,N,12,2", label: "Percentage Household Industry Workers" },
  { id: "M_HH_INDUS,N,12,0", label: "Male Household Industry Workers" },
  { id: "F_HH_INDUS,N,12,0", label: "Female Household Industry Workers" },
  { id: "SR_HH_INDU,N,12,0", label: "Sex Ratio Household Industry Workers" },
  { id: "T_OTH_INDU,N,12,0", label: "Total Other Industry Workers" },
  { id: "T%_OTH_IND,N,12,2", label: "Percentage Other Industry Workers" },
  { id: "M_OTH_INDU,N,12,0", label: "Male Other Industry Workers" },
  { id: "F_OTH_INDU,N,12,0", label: "Female Other Industry Workers" },
  { id: "SR_OTH_IND,N,12,0", label: "Sex Ratio Other Industry Workers" },
  { id: "T_CONSTRUC,N,13,0", label: "Total Construction Workers" },
  { id: "T%_CONSTRU,N,13,2", label: "Percentage Construction Workers" },
  { id: "M_CONSTRUC,N,13,0", label: "Male Construction Workers" },
  { id: "F_CONSTRUC,N,13,0", label: "Female Construction Workers" },
  { id: "SR_CONSTRU,N,13,0", label: "Sex Ratio Construction Workers" },
  { id: "T_TRADE,N,10,0", label: "Total Trade Workers" },
  { id: "T%_TRADE,N,12,2", label: "Percentage Trade Workers" },
  { id: "M_TRADE,N,10,0", label: "Male Trade Workers" },
  { id: "F_TRADE,N,10,0", label: "Female Trade Workers" },
  { id: "SR_TRADE,N,11,0", label: "Sex Ratio Trade Workers" },
  { id: "T_TRANSPOR,N,13,0", label: "Total Transport Workers" },
  { id: "T%_TRANSPO,N,13,2", label: "Percentage Transport Workers" },
  { id: "M_TRANSPOR,N,13,0", label: "Male Transport Workers" },
  { id: "F_TRANSPOR,N,13,0", label: "Female Transport Workers" },
  { id: "SR_TRANSPO,N,13,0", label: "Sex Ratio Transport Workers" },
  { id: "T_SERVICES,N,12,0", label: "Total Service Workers" },
  { id: "T%_SERVICE,N,13,2", label: "Percentage Service Workers" },
  { id: "M_SERVICES,N,13,0", label: "Male Service Workers" },
  { id: "F_SERVICES,N,12,0", label: "Female Service Workers" },
  { id: "SR_SERVICE,N,12,0", label: "Sex Ratio Service Workers" },
];

const fields2001 = [
  { id: "No_HH", label: "Number of Households" },
  { id: "TOT_P", label: "Total Population" },
  { id: "TOT_M", label: "Total Males" },
  { id: "TOT_F", label: "Total Females" },
  { id: "P_06", label: "Population Age 0-6" },
  { id: "M_06", label: "Male Population Age 0-6" },
  { id: "F_06", label: "Female Population Age 0-6" },
  { id: "P_SC", label: "Scheduled Caste Population" },
  { id: "M_SC", label: "Male Scheduled Caste Population" },
  { id: "F_SC", label: "Female Scheduled Caste Population" },
  { id: "P_ST", label: "Scheduled Tribe Population" },
  { id: "M_ST", label: "Male Scheduled Tribe Population" },
  { id: "F_ST", label: "Female Scheduled Tribe Population" },
  { id: "P_LIT", label: "Literate Population" },
  { id: "M_LIT", label: "Male Literate Population" },
  { id: "F_LIT", label: "Female Literate Population" },
  { id: "P_ILL", label: "Illiterate Population" },
  { id: "M_ILL", label: "Male Illiterate Population" },
  { id: "F_ILL", label: "Female Illiterate Population" },
  { id: "TOT_WORK_P", label: "Total Working Population" },
  { id: "TOT_WORK_M", label: "Total Working Males" },
  { id: "TOT_WORK_F", label: "Total Working Females" },
  { id: "MAINWORK_P", label: "Main Workers Population" },
  { id: "MAINWORK_M", label: "Main Workers Males" },
  { id: "MAINWORK_F", label: "Main Workers Females" },
  { id: "MAIN_CL_P", label: "Main Cultivators Population" },
  { id: "MAIN_CL_M", label: "Main Cultivators Males" },
  { id: "MAIN_CL_F", label: "Main Cultivators Females" },
  { id: "MAIN_AL_P", label: "Main Agricultural Laborers Population" },
  { id: "MAIN_AL_M", label: "Main Agricultural Laborers Males" },
  { id: "MAIN_AL_F", label: "Main Agricultural Laborers Females" },
  { id: "MAIN_HH_P", label: "Main Household Industry Workers Population" },
  { id: "MAIN_HH_M", label: "Main Household Industry Workers Males" },
  { id: "MAIN_HH_F", label: "Main Household Industry Workers Females" },
  { id: "MAIN_OT_P", label: "Main Other Workers Population" },
  { id: "MAIN_OT_M", label: "Main Other Workers Males" },
  { id: "MAIN_OT_F", label: "Main Other Workers Females" },
  { id: "MARGWORK_P", label: "Marginal Workers Population" },
  { id: "MARGWORK_M", label: "Marginal Workers Males" },
  { id: "MARGWORK_F", label: "Marginal Workers Females" },
  { id: "MARG_CL_P", label: "Marginal Cultivators Population" },
  { id: "MARG_CL_M", label: "Marginal Cultivators Males" },
  { id: "MARG_CL_F", label: "Marginal Cultivators Females" },
  { id: "MARG_AL_P", label: "Marginal Agricultural Laborers Population" },
  { id: "MARG_AL_M", label: "Marginal Agricultural Laborers Males" },
  { id: "MARG_AL_F", label: "Marginal Agricultural Laborers Females" },
  { id: "MARG_HH_P", label: "Marginal Household Industry Workers Population" },
  { id: "MARG_HH_M", label: "Marginal Household Industry Workers Males" },
  { id: "MARG_HH_F", label: "Marginal Household Industry Workers Females" },
  { id: "MARG_OT_P", label: "Marginal Other Workers Population" },
  { id: "MARG_OT_M", label: "Marginal Other Workers Males" },
  { id: "MARG_OT_F", label: "Marginal Other Workers Females" },
  { id: "NON_WORK_P", label: "Non-Working Population" },
  { id: "NON_WORK_M", label: "Non-Working Males" },
  { id: "NON_WORK_F", label: "Non-Working Females" },
];

const fields2011 = [
  { id: "No_HH", label: "Number of Households" },
  { id: "TOT_P", label: "Total Population" },
  { id: "TOT_M", label: "Total Males" },
  { id: "TOT_F", label: "Total Females" },
  { id: "P_06", label: "Population Age 0-6" },
  { id: "M_06", label: "Male Population Age 0-6" },
  { id: "F_06", label: "Female Population Age 0-6" },
  { id: "P_SC", label: "Scheduled Caste Population" },
  { id: "M_SC", label: "Male Scheduled Caste Population" },
  { id: "F_SC", label: "Female Scheduled Caste Population" },
  { id: "P_ST", label: "Scheduled Tribe Population" },
  { id: "M_ST", label: "Male Scheduled Tribe Population" },
  { id: "F_ST", label: "Female Scheduled Tribe Population" },
  { id: "P_LIT", label: "Literate Population" },
  { id: "M_LIT", label: "Male Literate Population" },
  { id: "F_LIT", label: "Female Literate Population" },
  { id: "P_ILL", label: "Illiterate Population" },
  { id: "M_ILL", label: "Male Illiterate Population" },
  { id: "F_ILL", label: "Female Illiterate Population" },
  { id: "TOT_WORK_P", label: "Total Working Population" },
  { id: "TOT_WORK_M", label: "Total Working Males" },
  { id: "TOT_WORK_F", label: "Total Working Females" },
  { id: "MAINWORK_P", label: "Main Workers Population" },
  { id: "MAINWORK_M", label: "Main Workers Males" },
  { id: "MAINWORK_F", label: "Main Workers Females" },
  { id: "MAIN_CL_P", label: "Main Cultivators Population" },
  { id: "MAIN_CL_M", label: "Main Cultivators Males" },
  { id: "MAIN_CL_F", label: "Main Cultivators Females" },
  { id: "MAIN_AL_P", label: "Main Agricultural Laborers Population" },
  { id: "MAIN_AL_M", label: "Main Agricultural Laborers Males" },
  { id: "MAIN_AL_F", label: "Main Agricultural Laborers Females" },
  { id: "MAIN_HH_P", label: "Main Household Industry Workers Population" },
  { id: "MAIN_HH_M", label: "Main Household Industry Workers Males" },
  { id: "MAIN_HH_F", label: "Main Household Industry Workers Females" },
  { id: "MAIN_OT_P", label: "Main Other Workers Population" },
  { id: "MAIN_OT_M", label: "Main Other Workers Males" },
  { id: "MAIN_OT_F", label: "Main Other Workers Females" },
  { id: "MARGWORK_P", label: "Marginal Workers Population" },
  { id: "MARGWORK_M", label: "Marginal Workers Males" },
  { id: "MARGWORK_F", label: "Marginal Workers Females" },
  { id: "MARG_CL_P", label: "Marginal Cultivators Population" },
  { id: "MARG_CL_M", label: "Marginal Cultivators Males" },
  { id: "MARG_CL_F", label: "Marginal Cultivators Females" },
  { id: "MARG_AL_P", label: "Marginal Agricultural Laborers Population" },
  { id: "MARG_AL_M", label: "Marginal Agricultural Laborers Males" },
  { id: "MARG_AL_F", label: "Marginal Agricultural Laborers Females" },
  { id: "MARG_HH_P", label: "Marginal Household Industry Workers Population" },
  { id: "MARG_HH_M", label: "Marginal Household Industry Workers Males" },
  { id: "MARG_HH_F", label: "Marginal Household Industry Workers Females" },
  { id: "MARG_OT_P", label: "Marginal Other Workers Population" },
  { id: "MARG_OT_M", label: "Marginal Other Workers Males" },
  { id: "MARG_OT_F", label: "Marginal Other Workers Females" },
  { id: "MARGWORK_3_6_P", label: "Marginal Workers 3-6 Months Population" },
  { id: "MARGWORK_3_6_M", label: "Marginal Workers 3-6 Months Males" },
  { id: "MARGWORK_3_6_F", label: "Marginal Workers 3-6 Months Females" },
  { id: "MARG_CL_3_6_P", label: "Marginal Cultivators 3-6 Months Population" },
  { id: "MARG_CL_3_6_M", label: "Marginal Cultivators 3-6 Months Males" },
  { id: "MARG_CL_3_6_F", label: "Marginal Cultivators 3-6 Months Females" },
  {
    id: "MARG_AL_3_6_P",
    label: "Marginal Agricultural Laborers 3-6 Months Population",
  },
  {
    id: "MARG_AL_3_6_M",
    label: "Marginal Agricultural Laborers 3-6 Months Males",
  },
  {
    id: "MARG_AL_3_6_F",
    label: "Marginal Agricultural Laborers 3-6 Months Females",
  },
  {
    id: "MARG_HH_3_6_P",
    label: "Marginal Household Industry Workers 3-6 Months Population",
  },
  {
    id: "MARG_HH_3_6_M",
    label: "Marginal Household Industry Workers 3-6 Months Males",
  },
  {
    id: "MARG_HH_3_6_F",
    label: "Marginal Household Industry Workers 3-6 Months Females",
  },
  {
    id: "MARG_OT_3_6_P",
    label: "Marginal Other Workers 3-6 Months Population",
  },
  { id: "MARG_OT_3_6_M", label: "Marginal Other Workers 3-6 Months Males" },
  { id: "MARG_OT_3_6_F", label: "Marginal Other Workers 3-6 Months Females" },
  { id: "MARGWORK_0_3_P", label: "Marginal Workers 0-3 Months Population" },
  { id: "MARGWORK_0_3_M", label: "Marginal Workers 0-3 Months Males" },
  { id: "MARGWORK_0_3_F", label: "Marginal Workers 0-3 Months Females" },
  { id: "MARG_CL_0_3_P", label: "Marginal Cultivators 0-3 Months Population" },
  { id: "MARG_CL_0_3_M", label: "Marginal Cultivators 0-3 Months Males" },
  { id: "MARG_CL_0_3_F", label: "Marginal Cultivators 0-3 Months Females" },
  {
    id: "MARG_AL_0_3_P",
    label: "Marginal Agricultural Laborers 0-3 Months Population",
  },
  {
    id: "MARG_AL_0_3_M",
    label: "Marginal Agricultural Laborers 0-3 Months Males",
  },
  {
    id: "MARG_AL_0_3_F",
    label: "Marginal Agricultural Laborers 0-3 Months Females",
  },
  {
    id: "MARG_HH_0_3_P",
    label: "Marginal Household Industry Workers 0-3 Months Population",
  },
  {
    id: "MARG_HH_0_3_M",
    label: "Marginal Household Industry Workers 0-3 Months Males",
  },
  {
    id: "MARG_HH_0_3_F",
    label: "Marginal Household Industry Workers 0-3 Months Females",
  },
  {
    id: "MARG_OT_0_3_P",
    label: "Marginal Other Workers 0-3 Months Population",
  },
  { id: "MARG_OT_0_3_M", label: "Marginal Other Workers 0-3 Months Males" },
  { id: "MARG_OT_0_3_F", label: "Marginal Other Workers 0-3 Months Females" },
  { id: "NON_WORK_P", label: "Non-Working Population" },
  { id: "NON_WORK_M", label: "Non-Working Males" },
  { id: "NON_WORK_F", label: "Non-Working Females" },
];

const QueryComponent = ({ applyFilters, revertFeatures, year }) => {
  const [fields, setFields] = useState([]);

  const getFieldsForYear = () => {
    if (year === "1991") return fields1991;
    if (year === "2001") return fields2001;
    if (year === "2011") return fields2011;
    return [];
  };

  const addField = () => {
    const select = document.getElementById("addField");
    const fieldId = select.value;
    if (fieldId) {
      const field = getFieldsForYear().find((f) => f.id === fieldId);
      if (field) {
        setFields([...fields, field]);
        select.value = ""; // Reset the select
      }
    }
  };

  const removeField = (fieldId) => {
    const updatedFields = fields.filter((field) => field.id !== fieldId);
    setFields(updatedFields);
    handleApplyFilters(updatedFields); // Apply filters again with updated fields
  };

  useEffect(() => {
    fields.forEach((field) => {
      const operatorSelect = document.getElementById(`${field.id}_op`);
      const secondInput = document.getElementById(`${field.id}_2`);

      const handleOperatorChange = () => {
        if (operatorSelect.value === "between") {
          secondInput.style.display = "inline-block";
        } else {
          secondInput.style.display = "none";
        }
      };

      operatorSelect.addEventListener("change", handleOperatorChange);

      // Initial check
      handleOperatorChange();
    });
  }, [fields]);

  const handleApplyFilters = (currentFields = []) => {
    const filters = {};
    (currentFields.length ? currentFields : fields).forEach((field) => {
      const operator = document.getElementById(`${field.id}_op`).value;
      const value = parseFloat(document.getElementById(field.id).value);
      const value2 = parseFloat(document.getElementById(`${field.id}_2`).value);
      filters[field.id] = { operator, value, value2 };
    });
    applyFilters(filters);
  };

  return (
    <div id="controls" className="query-controls">
      <label htmlFor="addField">Add Field: </label>
      <select id="addField" onChange={addField}>
        <option value="">Select Field</option>
        {getFieldsForYear().map((field) => (
          <option key={field.id} value={field.id}>
            {field.label}
          </option>
        ))}
      </select>
      <div id="filters">
        {fields.map((field) => (
          <div
            key={field.id}
            id={`${field.id}_controls`}
            className="filter-group"
          >
            <label htmlFor={field.id}>{field.label}: </label>
            <select id={`${field.id}_op`}>
              <option value="<">Less Than</option>
              <option value=">">Greater Than</option>
              <option value="=">Equal To</option>
              <option value="between">Between</option>
            </select>
            <input type="text" id={field.id} />
            <input
              type="text"
              id={`${field.id}_2`}
              style={{ display: "none" }}
            />
            <button
              onClick={() => removeField(field.id)}
              className="btn btn-danger btn-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => handleApplyFilters()}
        className="btn btn-primary mt-3"
      >
        Apply Filter
      </button>
      <button onClick={revertFeatures} className="btn btn-secondary mt-3">
        Revert
      </button>
    </div>
  );
};

export default QueryComponent;
