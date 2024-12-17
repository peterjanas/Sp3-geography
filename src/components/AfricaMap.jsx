function AfricaMapLow({ getCountryColor, onMouseOver }) {
  return (
    <svg
      viewBox="
      404.5790100097656
      345.2070007324219 
      238.31301879882812 
      226.08840942382812"
      style={{ width: "100%", height: "auto", display: "block" }}
      onMouseOver={onMouseOver}
      className="africa-map"
    >
      <path
        id="AO"
        title="Angola"
        className={`land ${getCountryColor("ao")}`}
        d="M521.03,479.78l0.69,2.09l0.8,1.68l0.64,0.91l1.07,1.47l1.85,-0.23l0.93,-0.4l1.55,0.4l0.42,-0.7l0.7,-1.64l1.74,-0.11l0.15,-0.49l1.43,-0.01l-0.24,1.01l3.4,-0.02l0.05,1.77l0.57,1.09l-0.41,1.7l0.21,1.74l0.94,1.05l-0.15,3.37l0.69,-0.26l1.22,0.07l1.74,-0.42l1.28,0.17l0.3,0.88l-0.32,1.38l0.49,1.34l-0.42,1.07l0.24,0.99l-5.84,-0.04l-0.13,9.16l1.89,2.38l1.83,1.82l-5.15,1.19l-6.79,-0.41l-1.94,-1.4l-11.37,0.13l-0.42,0.21l-1.67,-1.32l-1.82,-0.09l-1.68,0.5l-1.35,0.56l-0.26,-1.83l0.39,-2.55l0.97,-2.65l0.15,-1.24l0.91,-2.59l0.67,-1.17l1.61,-1.87l0.9,-1.27l0.29,-2.11l-0.15,-1.61l-0.84,-1.01l-0.75,-1.72l-0.69,-1.69l0.15,-0.59l0.86,-1.12l-0.85,-2.72l-0.57,-1.88l-1.4,-1.77l0.27,-0.54l1.16,-0.38l0.81,0.05l0.98,-0.34L521.03,479.78zM510.12,479.24l-0.71,0.3l-0.75,-2.1l1.13,-1.21l0.85,-0.47l1.05,0.96l-1.02,0.59l-0.46,0.72L510.12,479.24z"
      />
      <path
        id="BF"
        title="Burkina Faso"
        className={`land ${getCountryColor("bf")}`}
        d="M467.33,436.4L465.41,435.67L464.09,435.78L463.11,436.49L461.85,435.89L461.36,434.96L460.1,434.34L459.91,432.7L460.68,431.49L460.61,430.53L462.84,428.17L463.25,426.21L464.02,425.51L465.38,425.89L466.55,425.31L466.93,424.57L469.11,423.29L469.64,422.39L472.26,421.19L473.81,420.78L474.51,421.33L476.3,421.32L476.08,422.72L476.46,424.03L478.04,425.9L478.12,427.28L481.36,427.93L481.29,429.88L480.68,430.74L479.31,431L478.74,432.24L477.78,432.56L475.32,432.5L474.02,432.28L473.12,432.74L471.88,432.53L467.01,432.66L466.94,434.27z"
      />
      <path
        id="BI"
        title="Burundi"
        className={`land ${getCountryColor("bi")}`}
        d="M557.52,475.93L557.34,472.56L556.63,471.3L558.34,471.52L559.2,469.93L560.69,470.11L560.85,471.21L561.45,471.84L561.48,472.75L560.79,473.33L559.69,474.79L558.68,475.8z"
      />
      <path
        id="BJ"
        title="Benin"
        className={`land ${getCountryColor("bj")}`}
        d="M482.8,445.92L480.48,446.25L479.79,444.31L479.92,437.85L479.35,437.27L479.25,435.88L478.27,434.89L477.42,434.06L477.78,432.56L478.74,432.24L479.31,431L480.68,430.74L481.29,429.88L482.23,429.05L483.24,429.04L485.38,430.68L485.27,431.63L485.9,433.31L485.35,434.45L485.64,435.21L484.28,436.96L483.42,437.83L482.89,439.6L482.96,441.39z"
      />
      <path
        id="BW"
        title="Botswana"
        className={`land ${getCountryColor("bw")}`}
        d="M547.17,515.95L547.73,516.47L548.62,518.18L551.79,521.43L552.99,521.75L553,522.8L553.82,524.7L555.99,525.16L557.78,526.52L553.81,528.74L551.29,531L550.36,533.03L549.52,534.18L547.99,534.43L547.5,535.9L547.21,536.86L545.42,537.58L543.14,537.43L541.8,536.57L540.62,536.19L539.25,536.91L538.56,538.39L537.23,539.32L535.83,540.71L533.82,541.03L533.2,539.94L533.46,538.04L531.79,535.11L531.04,534.65L531.04,525.79L533.8,525.68L533.88,515.11L535.97,515.02L540.29,513.99L541.37,515.2L543.15,514.05L544.01,514.04L545.59,513.38L546.09,513.6z"
      />
      <path
        id="CD"
        title="Democratic Republic of Congo"
        className={`land ${getCountryColor("cd")}`}
        d="M561.71,453.61L561.54,456.87L562.66,457.24L561.76,458.23L560.68,458.97L559.61,460.43L559.02,461.72L558.86,463.96L558.21,465.02L558.19,467.12L557.38,467.9L557.28,469.56L556.89,469.77L556.63,471.3L557.34,472.56L557.52,475.93L558.02,478.5L557.74,479.96L558.3,481.58L559.93,483.15L561.44,486.7L560.34,486.41L556.57,486.89L555.82,487.22L555.02,489.02L555.65,490.27L555.15,493.62L554.8,496.47L555.56,496.98L557.52,498.08L558.29,497.57L558.53,500.65L556.38,500.62L555.23,499.05L554.2,497.83L552.05,497.43L551.42,495.94L549.7,496.84L547.46,496.44L546.52,495.15L544.74,494.89L543.43,494.96L543.27,494.08L542.3,494.01L541.02,493.84L539.29,494.26L538.07,494.19L537.37,494.45L537.52,491.08L536.59,490.03L536.38,488.3L536.79,486.6L536.23,485.51L536.18,483.75L532.77,483.77L533.02,482.76L531.59,482.77L531.44,483.26L529.7,483.37L528.99,485L528.57,485.71L527.02,485.31L526.1,485.71L524.24,485.93L523.17,484.46L522.53,483.55L521.72,481.87L521.03,479.78L512.76,479.75L511.77,480.08L510.96,480.03L509.8,480.41L509.41,479.54L510.12,479.24L510.21,478.02L510.67,477.3L511.69,476.72L512.43,477L513.39,475.93L514.91,475.96L515.09,476.75L516.14,477.25L517.79,475.49L519.42,474.13L520.13,473.24L520.04,470.94L521.26,468.23L522.54,466.8L524.39,465.46L524.71,464.57L524.78,463.55L525.24,462.58L525.09,461L525.44,458.53L525.99,456.79L526.83,455.3L526.99,453.62L527.24,451.67L528.34,450.25L529.84,449.35L532.15,450.3L533.93,451.33L535.98,451.61L538.07,452.15L538.91,450.47L539.3,450.25L540.57,450.53L543.7,449.14L544.8,449.73L545.71,449.65L546.13,448.97L547.17,448.73L549.28,449.02L551.08,449.08L552.01,448.79L553.7,451.1L554.96,451.43L555.71,450.96L557.01,451.15L558.57,450.56L559.24,451.75z"
      />
      <path
        id="CF"
        title="Central African Republic"
        className={`land ${getCountryColor("cf")}`}
        d="M518.09,442.66L520.41,442.44L520.93,441.72L521.39,441.78L522.09,442.41L525.62,441.34L526.81,440.24L528.28,439.25L528,438.26L528.79,438L531.5,438.18L534.14,436.87L536.16,433.78L537.59,432.64L539.36,432.15L539.68,433.37L541.3,435.14L541.3,436.29L540.85,437.47L541.03,438.34L542,439.15L544.14,440.39L545.67,441.52L545.7,442.44L547.58,443.9L548.75,445.11L549.46,446.79L551.56,447.9L552.01,448.79L551.08,449.08L549.28,449.02L547.17,448.73L546.13,448.97L545.71,449.65L544.8,449.73L543.7,449.14L540.57,450.53L539.3,450.25L538.91,450.47L538.07,452.15L535.98,451.61L533.93,451.33L532.15,450.3L529.84,449.35L528.34,450.25L527.24,451.67L526.99,453.62L525.19,453.46L523.29,452.99L521.62,454.47L520.15,457.07L519.85,456.26L519.73,454.99L518.45,454.09L517.41,452.65L517.17,451.65L515.85,450.19L516.07,449.36L515.79,448.18L516.01,446.01L516.68,445.5z"
      />
      <path
        id="CG"
        title="Republic of Congo"
        className={`land ${getCountryColor("cg")}`}
        d="M511.69,476.72L510.64,475.76L509.79,476.23L508.66,477.43L506.36,474.48L508.49,472.94L507.44,471.09L508.4,470.39L510.29,470.05L510.51,468.81L512.01,470.15L514.49,470.27L515.35,468.95L515.7,467.1L515.39,464.92L514.07,463.28L515.28,460.05L514.58,459.5L512.5,459.72L511.71,458.29L511.92,457.07L515.45,457.18L517.72,457.91L519.95,458.57L520.15,457.07L521.62,454.47L523.29,452.99L525.19,453.46L526.99,453.62L526.83,455.3L525.99,456.79L525.44,458.53L525.09,461L525.24,462.58L524.78,463.55L524.71,464.57L524.39,465.46L522.54,466.8L521.26,468.23L520.04,470.94L520.13,473.24L519.42,474.13L517.79,475.49L516.14,477.25L515.09,476.75L514.91,475.96L513.39,475.93L512.43,477z"
      />
      <path
        id="CI"
        title="Côte d'Ivoire"
        className={`land ${getCountryColor("ci")}`}
        d="M467.24,449.46L465.97,449.49L464.01,448.94L462.22,448.97L458.89,449.46L456.95,450.27L454.17,451.29L453.63,451.22L453.84,448.92L454.11,448.57L454.03,447.46L452.84,446.29L451.95,446.1L451.13,445.33L451.74,444.09L451.46,442.73L451.59,441.91L452.04,441.91L452.2,440.68L451.98,440.14L452.25,439.75L453.29,439.41L452.6,437.15L451.95,435.99L452.18,435.02L452.74,434.81L453.1,434.55L453.88,434.97L456.04,435L456.56,434.17L457.04,434.23L457.85,433.91L458.29,435.12L458.94,434.76L460.1,434.34L461.36,434.96L461.85,435.89L463.11,436.49L464.09,435.78L465.41,435.67L467.33,436.4L468.07,440.41L466.89,442.77L466.16,445.94L467.37,448.35z"
      />
      <path
        id="CM"
        title="Cameroon"
        className={`land ${getCountryColor("cm")}`}
        d="M511.92,457.07L511.57,456.92L509.91,457.28L508.2,456.9L506.87,457.09L502.31,457.02L502.72,454.82L501.62,452.98L500.34,452.5L499.77,451.25L499.05,450.85L499.09,450.08L499.81,448.1L501.14,445.4L501.95,445.37L503.62,443.73L504.69,443.69L506.26,444.84L508.19,443.89L508.45,442.73L509.08,441.59L509.51,440.17L511.01,439.01L511.58,437.04L512.17,436.41L512.57,434.94L513.31,433.13L515.67,430.93L515.82,429.98L516.13,429.47L515.02,428.33L515.11,427.43L515.9,427.26L517.01,429.09L517.2,430.98L517.1,432.87L518.62,435.44L517.06,435.41L516.27,435.61L514.99,435.33L514.38,436.66L516.03,438.31L517.25,438.79L517.65,439.96L518.53,441.89L518.09,442.66L516.68,445.5L516.01,446.01L515.79,448.18L516.07,449.36L515.85,450.19L517.17,451.65L517.41,452.65L518.45,454.09L519.73,454.99L519.85,456.26L520.15,457.07L519.95,458.57L517.72,457.91L515.45,457.18z"
      />
      <path
        id="DJ"
        title="Djibouti"
        className={`land ${getCountryColor("dj")}`}
        d="M596.05,427.72L596.71,428.6L596.62,429.79L595.02,430.47L596.23,431.24L595.19,432.76L594.57,432.26L593.9,432.46L592.33,432.41L592.28,431.55L592.07,430.76L593.01,429.43L594,428.17L595.2,428.42z"
      />
      <path
        id="DZ"
        title="Algeria"
        className={`land ${getCountryColor("dz")}`}
        d="M508.9,396.08L499.29,401.83L491.17,407.68L487.22,409L484.11,409.29L484.08,407.41L482.78,406.93L481.03,406.08L480.37,404.69L470.91,398.14L461.45,391.49L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02L471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L471.86,356.68L474.9,356.08L476.67,354.65L479.37,353.6L484.12,352.98L488.76,352.69L490.17,353.21L492.81,351.84L495.81,351.81L496.95,352.62L498.86,352.41L498.29,354.2L498.74,357.48L498.08,360.3L496.35,362.18L496.6,364.71L498.89,366.69L498.92,367.5L500.64,368.83L501.84,374.69L502.75,377.53L502.9,379.01L502.41,381.6L502.61,383.04L502.25,384.76L502.5,386.73L501.38,388.02L503.04,390.28L503.15,391.6L504.14,393.31L505.45,392.75L507.67,394.17z"
      />
      <path
        id="EG"
        title="Egypt"
        className={`land ${getCountryColor("eg")}`}
        d="M573.17,377.28L572.38,378.57L571.78,380.97L571.02,382.61L570.36,383.17L569.43,382.15L568.16,380.73L566.16,376.16L565.88,376.45L567.04,379.82L568.76,383L570.88,387.88L571.91,389.56L572.81,391.3L575.33,394.7L574.77,395.23L574.86,397.2L578.13,399.91L578.62,400.53L567.5,400.53L556.62,400.53L545.35,400.53L545.35,389.3L545.35,378.12L544.51,375.54L545.23,373.54L544.8,372.15L545.81,370.58L549.54,370.53L552.24,371.39L555.02,372.36L556.32,372.86L558.48,371.83L559.63,370.9L562.11,370.63L564.1,371.04L564.87,372.66L565.52,371.59L567.76,372.36L569.95,372.55L571.33,371.73z"
      />
      <path
        id="ER"
        title="Eritrea"
        className={`land ${getCountryColor("er")}`}
        d="M594,428.17L593.04,427.24L591.89,425.57L590.65,424.65L589.92,423.65L587.48,422.5L585.56,422.47L584.88,421.86L583.24,422.54L581.54,421.23L580.66,423.38L577.4,422.78L577.1,421.63L578.31,417.38L578.58,415.45L579.46,414.55L581.53,414.07L582.95,412.4L584.58,415.78L585.35,418.45L586.89,419.86L590.71,422.58L592.27,424.22L593.79,425.88L594.67,426.86L596.05,427.72L595.2,428.42z"
      />
      <path
        id="ET"
        title="Ethiopia"
        className={`land ${getCountryColor("et")}`}
        d="M581.54,421.23L583.24,422.54L584.88,421.86L585.56,422.47L587.48,422.5L589.92,423.65L590.65,424.65L591.89,425.57L593.04,427.24L594,428.17L593.01,429.43L592.07,430.76L592.28,431.55L592.33,432.41L593.9,432.46L594.57,432.26L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.69,452.46L589.56,451.52L587,452.69L586.17,453.85L584.3,453.63L583.68,453.31L583.02,453.38L582.14,453.36L578.59,450.98L576.64,450.98L575.68,450.07L575.68,448.5L574.22,448.03L572.57,444.98L571.29,444.33L570.79,443.21L569.37,441.84L567.65,441.64L568.61,440.03L570.09,439.96L570.51,439.1L570.48,436.57L571.31,433.61L572.63,432.81L572.92,431.65L574.12,429.48L575.81,428.06L576.95,425.25L577.4,422.78L580.66,423.38z"
      />
      <path
        id="GA"
        title="Gabon"
        className={`land ${getCountryColor("ga")}`}
        d="M506.36,474.48L503.48,471.66L501.62,469.36L499.92,466.48L500.01,465.56L500.62,464.66L501.3,462.64L501.87,460.57L502.82,460.41L506.89,460.44L506.87,457.09L508.2,456.9L509.91,457.28L511.57,456.92L511.92,457.07L511.71,458.29L512.5,459.72L514.58,459.5L515.28,460.05L514.07,463.28L515.39,464.92L515.7,467.1L515.35,468.95L514.49,470.27L512.01,470.15L510.51,468.81L510.29,470.05L508.4,470.39L507.44,471.09L508.49,472.94z"
      />
      <path
        id="GH"
        title="Ghana"
        className={`land ${getCountryColor("gh")}`}
        d="M478.23,446.84L473.83,448.48L472.27,449.44L469.74,450.25L467.24,449.46L467.37,448.35L466.16,445.94L466.89,442.77L468.07,440.41L467.33,436.4L466.94,434.27L467.01,432.66L471.88,432.53L473.12,432.74L474.02,432.28L475.32,432.5L475.11,433.39L476.28,434.85L476.28,436.9L476.55,439.12L477.25,440.15L476.63,442.68L476.85,444.08L477.6,445.86z"
      />
      <path
        id="GM"
        title="Gambia"
        className={`land ${getCountryColor("gm")}`}
        d="M428.03,426.43L428.39,425.16L431.44,425.07L432.08,424.4L432.97,424.35L434.07,425.06L434.94,425.07L435.87,424.59L436.43,425.41L435.22,426.06L434,426.01L432.8,425.4L431.76,426.06L431.26,426.09L430.58,426.49z"
      />

      <path
        id="GN"
        title="Guinea"
        className={`land ${getCountryColor("gn")}`}
        d="M451.59,441.91L450.8,441.84L450.23,442.97L449.43,442.96L448.89,442.36L449.07,441.23L447.9,439.51L447.17,439.82L446.57,439.89L445.8,440.05L445.83,439.02L445.38,438.28L445.47,437.46L444.86,436.27L444.08,435.26L441.84,435.26L441.19,435.79L440.41,435.85L439.93,436.46L439.61,437.25L438.11,438.49L436.88,436.82L435.79,435.71L435.07,435.35L434.37,434.78L434.06,433.53L433.65,432.91L432.83,432.44L434.08,431.06L434.93,431.11L435.66,430.63L436.28,430.63L436.72,430.25L436.48,429.31L436.79,429.01L436.84,428.04L438.19,428.07L440.21,428.77L440.83,428.7L441.04,428.39L442.56,428.61L442.97,428.45L443.13,429.5L443.58,429.49L444.31,429.11L444.77,429.21L445.55,429.93L446.75,430.16L447.52,429.54L448.43,429.16L449.1,428.76L449.66,428.84L450.28,429.46L450.62,430.25L451.77,431.44L451.19,432.17L451.08,433.09L451.68,432.81L452.03,433.15L451.88,433.99L452.74,434.81L452.18,435.02L451.95,435.99L452.6,437.15L453.29,439.41L452.25,439.75L451.98,440.14L452.2,440.68L452.04,441.91z"
      />
      <path
        id="GQ"
        title="Equatorial Guinea"
        className={`land ${getCountryColor("gq")}`}
        d="M501.87,460.57L501.34,460.15L502.31,457.02L506.87,457.09L506.89,460.44L502.82,460.41z"
      />
      <path
        id="GW"
        title="Guinea-Bissau"
        className={`land ${getCountryColor("gw")}`}
        d="M432.83,432.44L431.33,431.25L430.15,431.07L429.51,430.26L429.52,429.83L428.67,429.23L428.49,428.62L429.98,428.15L430.91,428.24L431.66,427.92L436.84,428.04L436.79,429.01L436.48,429.31L436.72,430.25L436.28,430.63L435.66,430.63L434.93,431.11L434.08,431.06z"
      />
      <path
        id="KE"
        title="Kenya"
        className={`land ${getCountryColor("ke")}`}
        d="M590.19,465.78L591.85,468.07L589.89,469.19L589.2,470.35L588.14,470.55L587.75,472.52L586.85,473.64L586.3,475.5L585.17,476.42L581.15,473.63L580.95,472.01L570.79,466.34L570.31,466.03L570.29,463.08L571.09,461.95L572.47,460.11L573.49,458.08L572.26,454.88L571.93,453.48L570.6,451.54L572.32,449.87L574.22,448.03L575.68,448.5L575.68,450.07L576.64,450.98L578.59,450.98L582.14,453.36L583.02,453.38L583.68,453.31L584.3,453.63L586.17,453.85L587,452.69L589.56,451.52L590.69,452.46L592.61,452.46L590.16,455.63z"
      />
      <path
        id="LR"
        title="Liberia"
        className={`land ${getCountryColor("lr")}`}
        d="M453.63,451.22L452.89,451.24L450,449.91L447.46,447.78L445.07,446.25L443.18,444.44L443.85,443.54L444,442.73L445.26,441.2L446.57,439.89L447.17,439.82L447.9,439.51L449.07,441.23L448.89,442.36L449.43,442.96L450.23,442.97L450.8,441.84L451.59,441.91L451.46,442.73L451.74,444.09L451.13,445.33L451.95,446.1L452.84,446.29L454.03,447.46L454.11,448.57L453.84,448.92z"
      />
      <path
        id="LS"
        title="Lesotho"
        className={`land ${getCountryColor("ls")}`}
        d="M556.5,547.75L557.48,548.71L556.62,550.27L556.14,551.32L554.58,551.82L554.06,552.86L553.06,553.18L550.96,550.69L552.45,548.66L553.97,547.41L555.28,546.77z"
      />
      <path
        id="LY"
        title="Libya"
        className={`land ${getCountryColor("ly")}`}
        d="M516.89,397.93L514.91,399.05L513.33,397.39L508.9,396.08L507.67,394.17L505.45,392.75L504.14,393.31L503.15,391.6L503.04,390.28L501.38,388.02L502.5,386.73L502.25,384.76L502.61,383.04L502.41,381.6L502.9,379.01L502.75,377.53L501.84,374.69L503.21,373.94L503.45,372.56L503.15,371.21L505.08,369.95L505.94,368.9L507.31,367.95L507.47,365.4L510.76,366.55L511.94,366.26L514.28,366.82L518,368.29L519.31,371.21L521.83,371.85L525.78,373.21L528.77,374.82L530.14,373.98L531.48,372.49L530.83,369.98L531.71,368.38L533.73,366.83L535.66,366.38L539.45,367.06L540.41,368.54L541.45,368.55L542.34,369.11L545.13,369.5L545.81,370.58L544.8,372.15L545.23,373.54L544.51,375.54L545.35,378.12L545.35,389.3L545.35,400.53L545.35,406.49L542.13,406.5L542.09,407.74L530.91,402.04L519.72,396.27z"
      />
      <path
        id="MA"
        title="Morocco"
        className={`land ${getCountryColor("ma")}`}
        d="M471.36,366.31L470.39,362.78L470.23,360.73L469.17,358.55L467.95,358.51L465.05,357.76L462.38,358L460.69,356.54L458.63,356.52L457.74,358.63L455.87,362.14L453.79,363.53L450.98,365.06L449.18,367.3L448.8,369.04L447.73,371.86L448.43,375.89L446.09,378.57L444.69,379.42L442.48,381.59L439.87,381.94L438.46,383.15L438.41,383.19L436.63,386.39L434.77,387.53L433.75,389.44L433.69,391.09L432.94,392.88L432,393.37L430.44,395.31L429.48,397.46L429.66,398.48L428.74,400.05L427.66,400.87L427.53,402.26L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L450.96,383.35L450.96,383.14L450.93,379.39L455.46,377.03L458.26,376.54L460.55,375.68L461.63,374.06L464.91,372.77L465.03,370.36L466.65,370.07L467.92,368.86L471.59,368.3L472.1,367.02z"
      />
      <path
        id="MG"
        title="Madagascar"
        className={`land ${getCountryColor("mg")}`}
        d="M614.17,498.4L614.91,499.61L615.6,501.5L616.06,504.96L616.78,506.31L616.5,507.69L616.01,508.55L615.05,506.85L614.53,507.71L615.06,509.85L614.81,511.09L614.04,511.76L613.86,514.24L612.76,517.66L611.38,521.75L609.64,527.42L608.57,531.63L607.3,535.18L605.02,535.91L602.57,537.22L600.96,536.43L598.73,535.33L597.96,533.71L597.77,531L596.79,528.58L596.53,526.41L597.03,524.25L598.32,523.73L598.33,522.74L599.67,520.48L599.92,518.6L599.27,517.2L598.74,515.35L598.52,512.65L599.5,511.02L599.87,509.17L601.27,509.07L602.84,508.47L603.87,507.95L605.11,507.91L606.7,506.26L609.01,504.48L609.85,503.04L609.47,501.81L610.66,502.16L612.21,500.17L612.26,498.45L613.19,497.17z"
      />
      <path
        id="ML"
        title="Mali"
        className={`land ${getCountryColor("ml")}`}
        d="M441.13,422.22L442.07,421.7L442.54,420L443.43,419.93L445.39,420.73L446.97,420.16L448.05,420.35L448.48,419.71L459.73,419.67L460.35,417.64L459.86,417.28L458.51,404.6L457.16,391.54L461.45,391.49L470.91,398.14L480.37,404.69L481.03,406.08L482.78,406.93L484.08,407.41L484.11,409.29L487.22,409L487.23,415.75L485.69,417.69L485.45,419.48L482.96,419.93L479.14,420.18L478.1,421.21L476.3,421.32L474.51,421.33L473.81,420.78L472.26,421.19L469.64,422.39L469.11,423.29L466.93,424.57L466.55,425.31L465.38,425.89L464.02,425.51L463.25,426.21L462.84,428.17L460.61,430.53L460.68,431.49L459.91,432.7L460.1,434.34L458.94,434.76L458.29,435.12L457.85,433.91L457.04,434.23L456.56,434.17L456.04,435L453.88,434.97L453.1,434.55L452.74,434.81L451.88,433.99L452.03,433.15L451.68,432.81L451.08,433.09L451.19,432.17L451.77,431.44L450.62,430.25L450.28,429.46L449.66,428.84L449.1,428.76L448.43,429.16L447.52,429.54L446.75,430.16L445.55,429.93L444.77,429.21L444.31,429.11L443.58,429.49L443.13,429.5L442.97,428.45L443.1,427.56L442.86,426.46L441.81,425.65L441.26,424.01z"
      />
      <path
        id="MR"
        title="Mauritania"
        className={`land ${getCountryColor("mr")}`}
        d="M441.13,422.22L439.28,420.24L437.58,418.11L435.72,417.34L434.38,416.49L432.81,416.52L431.45,417.15L430.05,416.9L429.09,417.83L428.85,416.27L429.63,414.83L429.98,412.08L429.67,409.17L429.33,407.7L429.61,406.23L428.89,404.81L427.41,403.53L428.02,402.53L439,402.55L438.47,398.2L439.16,396.65L441.78,396.38L441.69,388.52L450.9,388.69L450.9,383.96L461.45,391.49L457.16,391.54L458.51,404.6L459.86,417.28L460.35,417.64L459.73,419.67L448.48,419.71L448.05,420.35L446.97,420.16L445.39,420.73L443.43,419.93L442.54,420L442.07,421.7z"
      />
      <path
        id="MW"
        title="Malawi"
        className={`land ${getCountryColor("mw")}`}
        d="M572.15,495.69L571.37,497.85L572.15,501.57L573.13,501.53L574.14,502.45L575.31,504.53L575.55,508.25L574.34,508.86L573.48,510.87L571.65,509.08L571.45,507.04L572.04,505.69L571.87,504.54L570.77,503.81L569.99,504.07L568.38,502.69L566.91,501.95L567.76,499.29L568.64,498.3L568.1,495.94L568.66,493.64L569.14,492.87L568.43,490.47L567.11,489.21L569.85,489.73L570.42,490.51L571.37,491.83z"
      />
      <path
        id="MZ"
        title="Mozambique"
        className={`land ${getCountryColor("mz")}`}
        d="M572.15,495.69L574.26,495.46L577.63,496.26L578.37,495.9L580.32,495.83L581.32,494.98L583,495.02L586.06,493.92L588.29,492.28L588.75,493.55L588.63,496.38L588.98,498.88L589.09,503.36L589.58,504.76L588.75,506.83L587.66,508.84L585.87,510.64L583.31,511.75L580.15,513.16L576.98,516.31L575.9,516.85L573.94,518.94L572.79,519.63L572.55,521.75L573.88,524L574.43,525.76L574.47,526.66L574.96,526.51L574.88,529.47L574.43,530.88L575.09,531.4L574.67,532.67L573.5,533.76L571.19,534.8L567.82,536.46L566.59,537.61L566.83,538.91L567.54,539.12L567.3,540.76L565.18,540.74L564.94,539.36L564.52,537.97L564.28,536.86L564.78,533.43L564.05,531.26L562.71,527L565.66,523.59L566.4,521.44L566.83,521.17L567.14,519.43L566.69,518.55L566.81,516.35L567.36,514.31L567.35,510.62L565.9,509.68L564.56,509.47L563.96,508.75L562.66,508.14L560.32,508.2L560.14,507.12L559.87,505.07L568.38,502.69L569.99,504.07L570.77,503.81L571.87,504.54L572.04,505.69L571.45,507.04L571.65,509.08L573.48,510.87L574.34,508.86L575.55,508.25L575.31,504.53L574.14,502.45L573.13,501.53L572.15,501.57L571.37,497.85z"
      />
      <path
        id="NA"
        title="Namibia"
        className={`land ${getCountryColor("na")}`}
        d="M521.08,546.54L519,544.15L517.9,541.85L517.28,538.82L516.59,536.57L515.65,531.85L515.59,528.22L515.23,526.58L514.14,525.34L512.69,522.87L511.22,519.3L510.61,517.45L508.32,514.58L508.15,512.33L509.5,511.78L511.18,511.28L513,511.37L514.67,512.69L515.09,512.48L526.46,512.36L528.4,513.76L535.19,514.17L540.34,512.98L542.64,512.31L544.46,512.48L545.56,513.14L545.59,513.38L544.01,514.04L543.15,514.05L541.37,515.2L540.29,513.99L535.97,515.02L533.88,515.11L533.8,525.68L531.04,525.79L531.04,534.65L531.03,546.17L528.53,547.8L527.03,548.03L525.26,547.43L524,547.2L523.53,545.84L522.42,544.97z"
      />
      <path
        id="NE"
        title="Niger"
        className={`land ${getCountryColor("ne")}`}
        d="M481.29,429.88L481.36,427.93L478.12,427.28L478.04,425.9L476.46,424.03L476.08,422.72L476.3,421.32L478.1,421.21L479.14,420.18L482.96,419.93L485.45,419.48L485.69,417.69L487.23,415.75L487.22,409L491.17,407.68L499.29,401.83L508.9,396.08L513.33,397.39L514.91,399.05L516.89,397.93L517.58,402.6L518.63,403.38L518.68,404.33L519.84,405.35L519.23,406.63L518.15,412.61L518.01,416.4L514.43,419.14L513.22,422.94L514.39,424L514.38,425.85L516.18,425.92L515.9,427.26L515.11,427.43L515.02,428.33L514.49,428.4L512.6,425.27L511.94,425.15L509.75,426.75L507.58,425.92L506.07,425.75L505.26,426.15L503.61,426.07L501.96,427.29L500.53,427.36L497.14,425.88L495.81,426.58L494.38,426.53L493.33,425.45L490.51,424.38L487.5,424.72L486.77,425.34L486.38,426.99L485.57,428.14L485.38,430.68L483.24,429.04L482.23,429.05z"
      />
      <path
        id="NG"
        title="Nigeria"
        className={`land ${getCountryColor("ng")}`}
        d="M499.09,450.08L496.18,451.08L495.11,450.94L494.03,451.56L491.79,451.5L490.29,449.75L489.37,447.73L487.38,445.89L485.27,445.92L482.8,445.92L482.96,441.39L482.89,439.6L483.42,437.83L484.28,436.96L485.64,435.21L485.35,434.45L485.9,433.31L485.27,431.63L485.38,430.68L485.57,428.14L486.38,426.99L486.77,425.34L487.5,424.72L490.51,424.38L493.33,425.45L494.38,426.53L495.81,426.58L497.14,425.88L500.53,427.36L501.96,427.29L503.61,426.07L505.26,426.15L506.07,425.75L507.58,425.92L509.75,426.75L511.94,425.15L512.6,425.27L514.49,428.4L515.02,428.33L516.13,429.47L515.82,429.98L515.67,430.93L513.31,433.13L512.57,434.94L512.17,436.41L511.58,437.04L511.01,439.01L509.51,440.17L509.08,441.59L508.45,442.73L508.19,443.89L506.26,444.84L504.69,443.69L503.62,443.73L501.95,445.37L501.14,445.4L499.81,448.1z"
      />
      <path
        id="RW"
        title="Rwanda"
        className={`land ${getCountryColor("rw")}`}
        d="M560.54,466.55L561.66,468.12L561.49,469.76L560.69,470.11L559.2,469.93L558.34,471.52L556.63,471.3L556.89,469.77L557.28,469.56L557.38,467.9L558.19,467.12L558.87,467.41z"
      />
      <path
        id="SD"
        title="Sudan"
        className={`land ${getCountryColor("sd")}`}
        d="M570.48,436.9L570.09,436.85L570.14,435.44L569.8,434.47L568.36,433.35L568.02,431.3L568.36,429.2L567.06,429.01L566.87,429.64L565.18,429.79L565.86,430.62L566.1,432.33L564.56,433.89L563.16,435.93L561.72,436.22L559.36,434.57L558.3,435.15L558.01,435.98L556.57,436.51L556.47,437.09L553.68,437.09L553.29,436.51L551.27,436.41L550.26,436.9L549.49,436.65L548.05,435L547.57,434.23L545.54,434.62L544.77,435.93L544.05,438.45L543.09,438.98L542.23,439.29L542,439.15L541.03,438.34L540.85,437.47L541.3,436.29L541.3,435.14L539.68,433.37L539.36,432.15L539.39,431.46L538.36,430.63L538.33,428.97L537.75,427.87L536.76,428.04L537.04,426.99L537.77,425.79L537.45,424.61L538.37,423.73L537.79,423.06L538.53,421.28L539.81,419.15L542.23,419.35L542.09,407.74L542.13,406.5L545.35,406.49L545.35,400.53L556.62,400.53L567.5,400.53L578.62,400.53L579.52,403.47L578.91,404.01L579.32,407.07L580.35,410.59L581.41,411.32L582.95,412.4L581.53,414.07L579.46,414.55L578.58,415.45L578.31,417.38L577.1,421.63L577.4,422.78L576.95,425.25L575.81,428.06L574.12,429.48L572.92,431.65L572.63,432.81L571.31,433.61L570.48,436.57z"
      />
      <path
        id="SL"
        title="Sierra Leone"
        className={`land ${getCountryColor("sl")}`}
        d="M443.18,444.44L442.42,444.23L440.41,443.1L438.95,441.6L438.46,440.57L438.11,438.49L439.61,437.25L439.93,436.46L440.41,435.85L441.19,435.79L441.84,435.26L444.08,435.26L444.86,436.27L445.47,437.46L445.38,438.28L445.83,439.02L445.8,440.05L446.57,439.89L445.26,441.2L444,442.73L443.85,443.54z"
      />
      <path
        id="SN"
        title="Senegal"
        className={`land ${getCountryColor("sn")}`}
        d="M428.39,425.16L427.23,422.92L425.83,421.9L427.07,421.35L428.43,419.32L429.09,417.83L430.05,416.9L431.45,417.15L432.81,416.52L434.38,416.49L435.72,417.34L437.58,418.11L439.28,420.24L441.13,422.22L441.26,424.01L441.81,425.65L442.86,426.46L443.1,427.56L442.97,428.45L442.56,428.61L441.04,428.39L440.83,428.7L440.21,428.77L438.19,428.07L436.84,428.04L431.66,427.92L430.91,428.24L429.98,428.15L428.49,428.62L428.03,426.43L430.58,426.49L431.26,426.09L431.76,426.06L432.8,425.4L434,426.01L435.22,426.06L436.43,425.41L435.87,424.59L434.94,425.07L434.07,425.06L432.97,424.35L432.08,424.4L431.44,425.07z"
      />
      <path
        id="SO"
        title="Somalia"
        className={`land ${getCountryColor("so")}`}
        d="M618.63,430.43L618.56,429.64L617.5,429.65L616.17,430.63L614.68,430.91L613.39,431.33L612.5,431.39L610.9,431.49L609.9,432.01L608.51,432.2L606.04,433.08L602.99,433.41L600.34,434.14L598.95,434.13L597.69,432.94L597.14,431.77L596.23,431.24L595.19,432.76L594.58,433.77L595.62,435.33L596.65,436.69L597.72,437.7L606.89,441.04L609.25,441.02L601.32,449.44L597.67,449.56L595.17,451.53L593.38,451.58L592.61,452.46L590.16,455.63L590.19,465.78L591.85,468.07L592.48,467.41L593.13,465.95L596.2,462.57L598.81,460.45L603.01,457.69L605.81,455.43L609.11,451.62L611.5,448.49L613.91,444.39L615.64,440.8L616.99,437.65L617.78,434.6L618.38,433.58L618.37,432.08z"
      />
      <path
        id="SS"
        title="South Sudan"
        className={`land ${getCountryColor("ss")}`}
        d="M570.48,436.9L570.51,439.1L570.09,439.96L568.61,440.03L567.65,441.64L569.37,441.84L570.79,443.21L571.29,444.33L572.57,444.98L574.22,448.03L572.32,449.87L570.6,451.54L568.87,452.82L566.9,452.82L564.64,453.47L562.86,452.84L561.71,453.61L559.24,451.75L558.57,450.56L557.01,451.15L555.71,450.96L554.96,451.43L553.7,451.1L552.01,448.79L551.56,447.9L549.46,446.79L548.75,445.11L547.58,443.9L545.7,442.44L545.67,441.52L544.14,440.39L542.23,439.29L543.09,438.98L544.05,438.45L544.77,435.93L545.54,434.62L547.57,434.23L548.05,435L549.49,436.65L550.26,436.9L551.27,436.41L553.29,436.51L553.68,437.09L556.47,437.09L556.57,436.51L558.01,435.98L558.3,435.15L559.36,434.57L561.72,436.22L563.16,435.93L564.56,433.89L566.1,432.33L565.86,430.62L565.18,429.79L566.87,429.64L567.06,429.01L568.36,429.2L568.02,431.3L568.36,433.35L569.8,434.47L570.14,435.44L570.09,436.85z"
      />
      <path
        id="SZ"
        title="Swaziland"
        className={`land ${getCountryColor("sz")}`}
        d="M565.18,540.74L564.61,542.13L562.97,542.46L561.29,540.77L561.27,539.69L562.03,538.52L562.3,537.62L563.11,537.4L564.52,537.97L564.94,539.36z"
      />
      <path
        id="TD"
        title="Chad"
        className={`land ${getCountryColor("td")}`}
        d="M515.9,427.26L516.18,425.92L514.38,425.85L514.39,424L513.22,422.94L514.43,419.14L518.01,416.4L518.15,412.61L519.23,406.63L519.84,405.35L518.68,404.33L518.63,403.38L517.58,402.6L516.89,397.93L519.72,396.27L530.91,402.04L542.09,407.74L542.23,419.35L539.81,419.15L538.53,421.28L537.79,423.06L538.37,423.73L537.45,424.61L537.77,425.79L537.04,426.99L536.76,428.04L537.75,427.87L538.33,428.97L538.36,430.63L539.39,431.46L539.36,432.15L537.59,432.64L536.16,433.78L534.14,436.87L531.5,438.18L528.79,438L528,438.26L528.28,439.25L526.81,440.24L525.62,441.34L522.09,442.41L521.39,441.78L520.93,441.72L520.41,442.44L518.09,442.66L518.53,441.89L517.65,439.96L517.25,438.79L516.03,438.31L514.38,436.66L514.99,435.33L516.27,435.61L517.06,435.41L518.62,435.44L517.1,432.87L517.2,430.98L517.01,429.09z"
      />
      <path
        id="TG"
        title="Togo"
        className={`land ${getCountryColor("tg")}`}
        d="M480.48,446.25L478.23,446.84L477.6,445.86L476.85,444.08L476.63,442.68L477.25,440.15L476.55,439.12L476.28,436.9L476.28,434.85L475.11,433.39L475.32,432.5L477.78,432.56L477.42,434.06L478.27,434.89L479.25,435.88L479.35,437.27L479.92,437.85L479.79,444.31z"
      />
      <path
        id="TN"
        title="Tunisia"
        className={`land ${getCountryColor("tn")}`}
        d="M501.84,374.69L500.64,368.83L498.92,367.5L498.89,366.69L496.6,364.71L496.35,362.18L498.08,360.3L498.74,357.48L498.29,354.2L498.86,352.41L501.92,351L503.88,351.42L503.8,353.19L506.18,351.9L506.38,352.57L504.97,354.28L504.96,355.88L505.93,356.73L505.56,359.69L503.71,361.4L504.24,363.23L505.69,363.29L506.4,364.88L507.47,365.4L507.31,367.95L505.94,368.9L505.08,369.95L503.15,371.21L503.45,372.56L503.21,373.94z"
      />
      <path
        id="TZ"
        title="Tanzania"
        className={`land ${getCountryColor("tz")}`}
        d="M570.31,466.03L570.79,466.34L580.95,472.01L581.15,473.63L585.17,476.42L583.88,479.87L584.04,481.46L585.84,482.48L585.92,483.21L585.15,484.91L585.31,485.76L585.13,487.11L586.11,488.87L587.27,491.66L588.29,492.28L586.06,493.92L583,495.02L581.32,494.98L580.32,495.83L578.37,495.9L577.63,496.26L574.26,495.46L572.15,495.69L571.37,491.83L570.42,490.51L569.85,489.73L567.11,489.21L565.51,488.36L563.73,487.89L562.61,487.41L561.44,486.7L559.93,483.15L558.3,481.58L557.74,479.96L558.02,478.5L557.52,475.93L558.68,475.8L559.69,474.79L560.79,473.33L561.48,472.75L561.45,471.84L560.85,471.21L560.69,470.11L561.49,469.76L561.66,468.12L560.54,466.55L561.53,466.21L564.6,466.25z"
      />
      <path
        id="UG"
        title="Uganda"
        className={`land ${getCountryColor("ug")}`}
        d="M564.6,466.25L561.53,466.21L560.54,466.55L558.87,467.41L558.19,467.12L558.21,465.02L558.86,463.96L559.02,461.72L559.61,460.43L560.68,458.97L561.76,458.23L562.66,457.24L561.54,456.87L561.71,453.61L562.86,452.84L564.64,453.47L566.9,452.82L568.87,452.82L570.6,451.54L571.93,453.48L572.26,454.88L573.49,458.08L572.47,460.11L571.09,461.95L570.29,463.08L570.31,466.03z"
      />
      <path
        id="ZA"
        title="South Africa"
        className={`land ${getCountryColor("za")}`}
        d="M563.63,548.71l-0.55,0.46l-1.19,1.63l-0.78,1.66l-1.59,2.33l-3.17,3.38l-1.98,1.98l-2.12,1.51l-2.93,1.3l-1.43,0.17l-0.36,0.93l-1.7,-0.5l-1.39,0.64l-3.04,-0.65l-1.7,0.41l-1.16,-0.18l-2.89,1.33l-2.39,0.54l-1.73,1.28l-1.28,0.08l-1.19,-1.21l-0.95,-0.06l-1.21,-1.51l-0.13,0.47l-0.37,-0.91l0.02,-1.96l-0.91,-2.23l0.9,-0.6l-0.07,-2.53l-1.84,-3.05l-1.41,-2.74l0,-0.01l-2.01,-4.15l1.34,-1.57l1.11,0.87l0.47,1.36l1.26,0.23l1.76,0.6l1.51,-0.23l2.5,-1.63l0,-11.52l0.76,0.46l1.66,2.93l-0.26,1.89l0.63,1.1l2.01,-0.32l1.4,-1.39l1.33,-0.93l0.69,-1.48l1.37,-0.72l1.18,0.38l1.34,0.87l2.28,0.15l1.79,-0.72l0.28,-0.96l0.49,-1.47l1.53,-0.25l0.84,-1.15l0.93,-2.03l2.52,-2.26l3.97,-2.22l1.14,0.03l1.36,0.51l0.94,-0.36l1.49,0.3l1.34,4.26l0.73,2.17l-0.5,3.43l0.24,1.11l-1.42,-0.57l-0.81,0.22l-0.26,0.9l-0.77,1.17l0.03,1.08l1.67,1.7l1.64,-0.34l0.57,-1.39l2.13,0.03l-0.7,2.28l-0.33,2.62l-0.73,1.43L563.63,548.71zM556.5,547.75l-1.22,-0.98l-1.31,0.65l-1.52,1.25l-1.5,2.03l2.1,2.48l1,-0.32l0.52,-1.03l1.56,-0.5l0.48,-1.05l0.86,-1.56L556.5,547.75z"
      />
      <path
        id="ZM"
        title="Zambia"
        className={`land ${getCountryColor("zm")}`}
        d="M567.11,489.21L568.43,490.47L569.14,492.87L568.66,493.64L568.1,495.94L568.64,498.3L567.76,499.29L566.91,501.95L568.38,502.69L559.87,505.07L560.14,507.12L558.01,507.52L556.42,508.67L556.08,509.68L555.07,509.9L552.63,512.3L551.08,514.19L550.13,514.26L549.22,513.92L546.09,513.6L545.59,513.38L545.56,513.14L544.46,512.48L542.64,512.31L540.34,512.98L538.51,511.16L536.62,508.78L536.75,499.62L542.59,499.66L542.35,498.67L542.77,497.6L542.28,496.27L542.6,494.89L542.3,494.01L543.27,494.08L543.43,494.96L544.74,494.89L546.52,495.15L547.46,496.44L549.7,496.84L551.42,495.94L552.05,497.43L554.2,497.83L555.23,499.05L556.38,500.62L558.53,500.65L558.29,497.57L557.52,498.08L555.56,496.98L554.8,496.47L555.15,493.62L555.65,490.27L555.02,489.02L555.82,487.22L556.57,486.89L560.34,486.41L561.44,486.7L562.61,487.41L563.73,487.89L565.51,488.36z"
      />
      <path
        id="ZW"
        title="Zimbabwe"
        className={`land ${getCountryColor("zw")}`}
        d="M562.71,527L561.22,526.7L560.27,527.06L558.92,526.55L557.78,526.52L555.99,525.16L553.82,524.7L553,522.8L552.99,521.75L551.79,521.43L548.62,518.18L547.73,516.47L547.17,515.95L546.09,513.6L549.22,513.92L550.13,514.26L551.08,514.19L552.63,512.3L555.07,509.9L556.08,509.68L556.42,508.67L558.01,507.52L560.14,507.12L560.32,508.2L562.66,508.14L563.96,508.75L564.56,509.47L565.9,509.68L567.35,510.62L567.36,514.31L566.81,516.35L566.69,518.55L567.14,519.43L566.83,521.17L566.4,521.44L565.66,523.59z"
      />
      <circle
        id="st-marker"
        cx="496.5"
        cy="458.3"
        r="3"
        className={`marker ${getCountryColor("st")}`}
      />
      <circle
        id="sc-marker"
        cx="631.4"
        cy="475.7"
        r="3"
        className={`marker ${getCountryColor("sc")}`}
      />
      <circle
        id="km-marker"
        cx="598.5"
        cy="496.0"
        r="3"
        className={`marker ${getCountryColor("km")}`}
      />
      <circle
        id="cv-marker"
        cx="410.0"
        cy="415.0"
        r="3"
        className={`marker ${getCountryColor("cv")}`}
      />
      <circle
        id="mu-marker"
        cx="637.5"
        cy="520.9"
        r="3"
        className={`marker ${getCountryColor("mu")}`}
      />
      <circle
        id="gm-marker"
        cx="431"
        cy="425.7"
        r="2.5"
        className={`marker ${getCountryColor("gm")}`}
      />
    </svg>
  );
}

export default AfricaMapLow;
