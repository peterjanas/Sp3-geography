function SouthAmericaMap({ getCountryColor, onMouseOver }) {
  return (
    <svg
      viewBox="
      200.46998596191406
      427.659912109375 
      185.5901641845703 
      226.130126953125"
      style={{ width: "100%", height: "auto", display: "block" }}
      onMouseOver={onMouseOver}
      className="southamerica-map"
    >
      <path
        id="AR"
        title="Argentina"
        className={`land ${getCountryColor("ar")}`}
        d="M291.6,648.91l-2.66,0.25l-1.43,-1.73l-1.69,-0.13l-3,0l0,-10.57l1.08,2.15l1.4,3.53l3.65,2.87l3.93,1.21L291.6,648.91zM293.1,526.47l1.65,2.18l1.09,-2.43l3.2,0.12l0.45,0.64l5.15,4.94l2.29,0.46l3.43,2.26l2.89,1.2l0.4,1.36l-2.76,4.73l2.83,0.85l3.15,0.48l2.22,-0.5l2.54,-2.4l0.46,-2.74l1.39,-0.59l1.41,1.79l-0.06,2.49l-2.36,1.73l-1.88,1.28l-3.16,3.08l-3.74,4.37l-0.7,2.59l-0.75,3.37l0.03,3.3l-0.61,0.74l-0.22,2.17l-0.19,1.76l3.56,2.91l-0.38,2.37l1.75,1.51l-0.14,1.7l-2.69,4.52l-4.16,1.91l-5.62,0.75l-3.08,-0.36l0.59,2.15l-0.57,2.72l0.52,1.85l-1.68,1.3l-2.87,0.51l-2.7,-1.35l-1.08,0.97l0.39,3.71l1.89,1.14l1.54,-1.19l0.84,1.96l-2.58,1.18l-2.25,2.38l-0.41,3.91l-0.66,2.11l-2.65,0.01l-2.2,2.04l-0.8,3.01l2.76,2.98l2.68,0.83l-0.96,3.73l-3.31,2.38l-1.82,5.03l-2.56,1.72l-1.15,2.06l0.91,4.64l1.87,2.63l-1.18,-0.23l-2.6,-0.71l-6.78,-0.61l-1.16,-2.63l0.05,-3.33l-1.87,0.28l-0.99,-1.6l-0.25,-4.6l2.15,-1.88l0.89,-2.68l-0.33,-2.11l1.49,-3.52l1.02,-5.35l-0.3,-2.33l1.22,-0.75l-0.3,-1.48l-1.3,-0.78l0.92,-1.63l-1.27,-1.46l-0.65,-4.4l1.13,-0.77l-0.47,-4.54l0.66,-3.75l0.75,-3.22l1.68,-1.3l-0.85,-3.46l-0.01,-3.22l2.12,-2.26l-0.06,-2.87l1.6,-3.31l0.01,-3.09l-0.73,-0.61l-1.29,-5.69l1.73,-3.34l-0.27,-3.11l1,-2.9l1.84,-2.96l1.98,-1.95l-0.84,-1.23l0.59,-1l-0.09,-5.14l3.05,-1.51l0.96,-3.16l-0.34,-0.76l2.34,-2.72L293.1,526.47z"
      />
      <path
        id="BO"
        title="Bolivia"
        className={`land ${getCountryColor("bo")}`}
        d="M299.04,526.35L295.84,526.22L294.75,528.65L293.1,526.47L289.43,525.74L287.1,528.46L285.07,528.87L283.97,524.72L282.47,521.38L283.35,518.51L281.88,517.26L281.51,515.14L280.13,513.14L281.9,510L280.69,507.56L281.34,506.59L280.83,505.52L281.93,504.08L281.99,501.64L282.12,499.62L282.73,498.66L280.3,494.08L282.39,494.32L283.83,494.25L284.46,493.4L286.91,492.25L288.38,491.19L292.05,490.71L291.76,492.83L292.1,493.92L291.87,495.82L294.92,498.37L298.06,498.84L299.16,499.91L301.06,500.48L302.22,501.31L303.98,501.28L305.61,502.13L305.73,503.79L306.28,504.63L306.32,505.88L305.5,505.92L306.58,509.29L311.95,509.41L311.54,511.09L311.84,512.24L313.37,513.06L314.04,514.88L313.54,517.2L312.77,518.49L313.04,520.18L312.16,520.79L312.12,519.88L309.5,518.37L306.9,518.32L302.01,519.18L300.67,521.8L300.6,523.4L299.49,526.99z"
      />
      <path
        id="BR"
        title="Brazil"
        className={`land ${getCountryColor("br")}`}
        d="M313.68,551.79L317.42,547.42L320.59,544.34L322.47,543.06L324.83,541.33L324.89,538.84L323.48,537.05L322.09,537.64L322.64,535.86L323.02,534.04L323.02,532.36L322.01,531.81L320.96,532.3L319.92,532.17L319.59,530.99L319.33,528.22L318.8,527.32L316.91,526.5L315.77,527.09L312.81,526.51L312.99,522.45L312.16,520.79L313.04,520.18L312.77,518.49L313.54,517.2L314.04,514.88L313.37,513.06L311.84,512.24L311.54,511.09L311.95,509.41L306.58,509.29L305.5,505.92L306.32,505.88L306.28,504.63L305.73,503.79L305.61,502.13L303.98,501.28L302.22,501.31L301.06,500.48L299.16,499.91L298.06,498.84L294.92,498.37L291.87,495.82L292.1,493.92L291.76,492.83L292.05,490.71L288.38,491.19L286.91,492.25L284.46,493.4L283.83,494.25L282.39,494.32L280.3,494.08L278.72,494.57L277.44,494.24L277.63,489.94L275.33,491.6L272.86,491.53L271.8,490.02L269.94,489.86L270.53,488.65L268.97,486.93L267.8,484.4L268.54,483.89L268.54,482.7L270.24,481.89L269.96,480.38L270.67,479.4L270.88,478.1L274.08,476.19L276.38,475.66L276.75,475.24L279.28,475.37L280.54,467.72L280.61,466.51L280.17,464.92L278.93,463.9L278.94,461.88L280.52,461.42L281.08,461.71L281.17,460.64L279.53,460.35L279.5,458.61L284.96,458.67L285.89,457.71L286.67,458.59L287.21,460.24L287.74,459.89L289.29,461.37L291.47,461.19L292.01,460.33L294.09,459.68L295.25,459.23L295.57,458.05L297.58,457.25L297.42,456.67L295.05,456.43L294.66,454.67L294.77,452.8L293.52,452.08L294.04,451.82L296.12,452.18L298.35,452.88L299.16,452.22L301.17,451.78L304.31,450.74L305.34,449.67L304.96,448.88L306.42,448.76L307.08,449.4L306.71,450.63L307.67,451.05L308.32,452.35L307.54,453.33L307.09,455.71L307.81,457.12L308.01,458.41L309.74,459.71L311.12,459.85L311.43,459.31L312.31,459.19L313.58,458.7L314.49,457.96L316.04,458.19L316.72,458.09L318.25,458.32L318.5,457.75L318.03,457.2L318.31,456.39L319.44,456.64L320.77,456.35L322.37,456.94L323.6,457.52L324.47,456.76L325.09,456.88L325.48,457.67L326.82,457.47L327.89,456.41L328.75,454.35L330.41,451.8L331.37,451.67L332.06,453.21L333.63,458.09L335.13,458.55L335.21,460.47L333.1,462.76L333.97,463.6L338.93,464.04L339.03,466.83L341.16,465L344.69,466.01L349.34,467.71L350.71,469.34L350.25,470.88L353.51,470.02L358.97,471.5L363.16,471.39L367.3,473.7L370.88,476.83L373.04,477.63L375.44,477.75L376.46,478.63L377.41,482.2L377.88,483.89L376.76,488.55L375.33,490.39L371.38,494.33L369.59,497.54L367.52,500.02L366.82,500.08L366.03,502.18L366.23,507.58L365.45,512.06L365.15,513.99L364.27,515.14L363.77,519.08L360.93,522.96L360.45,526.05L358.18,527.36L357.52,529.17L354.48,529.16L350.07,530.33L348.09,531.68L344.95,532.57L341.65,535.01L339.28,538.07L338.87,540.39L339.34,542.12L338.81,545.3L338.18,546.85L336.22,548.6L333.11,554.28L330.64,556.87L328.73,558.41L327.46,561.57L325.6,563.48L324.82,561.58L326.06,560.01L324.44,557.76L322.24,555.94L319.35,553.86L318.31,553.95L315.5,551.45z"
      />
      <path
        id="CL"
        title="Chile"
        className={`land ${getCountryColor("cl")}`}
        d="M282.81,636.73l0,10.57l3,0l1.69,0.13l-0.93,1.98l-2.4,1.53l-1.38,-0.16l-1.66,-0.4l-2.04,-1.48l-2.94,-0.71l-3.53,-2.71l-2.86,-2.57l-3.86,-5.25l2.31,0.97l3.94,3.13l3.72,1.7l1.45,-2.17l0.91,-3.2l2.58,-1.91L282.81,636.73zM283.97,524.72l1.1,4.15l2.02,-0.41l0.34,0.76l-0.96,3.16l-3.05,1.51l0.09,5.14l-0.59,1l0.84,1.23l-1.98,1.95l-1.84,2.96l-1,2.9l0.27,3.11l-1.73,3.34l1.29,5.69l0.73,0.61l-0.01,3.09l-1.6,3.31l0.06,2.87l-2.12,2.26l0.01,3.22l0.85,3.46l-1.68,1.3l-0.75,3.22l-0.66,3.75l0.47,4.54l-1.13,0.77l0.65,4.4l1.27,1.46l-0.92,1.63l1.3,0.78l0.3,1.48l-1.22,0.75l0.3,2.33l-1.02,5.35l-1.49,3.52l0.33,2.11l-0.89,2.68l-2.15,1.88l0.25,4.6l0.99,1.6l1.87,-0.28l-0.05,3.33l1.16,2.63l6.78,0.61l2.6,0.71l-2.49,-0.03l-1.35,1.13l-2.53,1.67l-0.45,4.38l-1.19,0.11l-3.16,-1.54l-3.21,-3.25l0,0l-3.49,-2.63l-0.88,-2.87l0.79,-2.62l-1.41,-2.94l-0.36,-7.34l1.19,-4.03l2.96,-3.19l-4.26,-1.19l2.67,-3.57l0.95,-6.56l3.12,1.37l1.46,-7.97l-1.88,-1l-0.88,4.75l-1.77,-0.54l0.88,-5.42l0.96,-6.84l1.29,-2.48l-0.81,-3.5l-0.23,-3.98l1.18,-0.11l1.72,-5.6l1.94,-5.43l1.19,-4.97l-0.65,-4.91l0.84,-2.67l-0.34,-3.96l1.64,-3.87l0.51,-6.04l0.9,-6.37l0.88,-6.75l-0.21,-4.87l-0.58,-4.15l1.44,-0.75l0.75,-1.5l1.37,1.99l0.37,2.12l1.47,1.25l-0.88,2.87L283.97,524.72z"
      />
      <path
        id="CO"
        title="Colombia"
        className={`land ${getCountryColor("co")}`}
        d="M263.92,463.81L262.72,463.15L261.34,462.23L260.54,462.67L258.16,462.28L257.48,461.08L256.96,461.13L254.15,459.54L253.77,458.67L254.82,458.46L254.7,457.07L255.35,456.06L256.74,455.87L257.93,454.12L259,452.66L257.96,451.99L258.49,450.37L257.86,447.81L258.46,447.08L258.02,444.71L256.88,443.21L257.24,441.85L258.15,442.05L258.68,441.21L258.03,439.56L258.37,439.14L259.81,439.23L261.92,437.26L263.07,436.96L263.1,436.03L263.62,433.64L265.23,432.32L266.99,432.27L267.21,431.68L269.41,431.91L271.62,430.48L272.71,429.84L274.06,428.47L275.06,428.64L275.79,429.39L275.25,430.35L273.45,430.83L272.74,432.25L271.65,433.06L270.84,434.12L270.49,436.13L269.72,437.79L271.16,437.97L271.52,439.27L272.14,439.89L272.36,441.02L272.03,442.06L272.13,442.65L272.82,442.88L273.49,443.86L277.09,443.59L278.72,443.95L280.7,446.36L281.83,446.06L283.85,446.21L285.45,445.89L286.44,446.38L285.93,447.88L285.31,448.82L285.09,450.83L285.65,452.68L286.45,453.51L286.54,454.14L285.12,455.53L286.14,456.14L286.89,457.12L287.74,459.89L287.21,460.24L286.67,458.59L285.89,457.71L284.96,458.67L279.5,458.61L279.53,460.35L281.17,460.64L281.08,461.71L280.52,461.42L278.94,461.88L278.93,463.9L280.17,464.92L280.61,466.51L280.54,467.72L279.28,475.37L277.88,473.88L277.04,473.82L278.85,470.98L276.7,469.67L275.02,469.91L274.01,469.43L272.46,470.17L270.37,469.82L268.72,466.9L267.42,466.18L266.53,464.86L264.67,463.54z"
      />
      <path
        id="EC"
        title="Ecuador"
        className={`land ${getCountryColor("ec")}`}
        d="M250.1,472.87L251.59,470.79L250.98,469.57L249.91,470.87L248.23,469.64L248.8,468.86L248.33,466.33L249.31,465.91L249.83,464.18L250.89,462.38L250.69,461.25L252.23,460.65L254.15,459.54L256.96,461.13L257.48,461.08L258.16,462.28L260.54,462.67L261.34,462.23L262.72,463.15L263.92,463.81L264.31,465.92L263.44,467.73L260.38,470.65L257.01,471.75L255.29,474.18L254.76,476.06L253.17,477.21L252,475.8L250.86,475.5L249.7,475.72L249.63,474.7L250.43,474.04z"
      />
      <path
        id="FK"
        title="Falkland Islands"
        className={`filler_country ${getCountryColor("fk")}`}
        class="filler_country"
        d="M303.66,633.13L307.02,630.44L309.41,631.56L311.09,629.77L313.33,631.78L312.49,633.36L308.7,634.72L307.44,633.13L305.06,635.18z"
      />
      <path
        id="GF"
        title="French Guiana"
        className={`land ${getCountryColor("gf")}`}
        d="M327.89,456.41l-1.07,1.06l-1.34,0.2l-0.38,-0.78l-0.63,-0.12l-0.87,0.76l-1.22,-0.57l0.71,-1.19l0.24,-1.27l0.48,-1.2l-1.09,-1.65l-0.22,-1.91l1.46,-2.41l0.95,0.31l2.06,0.66l2.97,2.36l0.46,1.14l-1.66,2.55L327.89,456.41z"
      />
      <path
        id="GY"
        title="Guyana"
        className={`land ${getCountryColor("gy")}`}
        d="M307.7,440L309.54,441.03L311.28,442.86L311.35,444.31L312.41,444.38L313.91,445.74L315.02,446.72L314.57,449.24L312.87,449.97L313.02,450.62L312.5,452.07L313.75,454.09L314.64,454.1L315.01,455.67L316.72,458.09L316.04,458.19L314.49,457.96L313.58,458.7L312.31,459.19L311.43,459.31L311.12,459.85L309.74,459.71L308.01,458.41L307.81,457.12L307.09,455.71L307.54,453.33L308.32,452.35L307.67,451.05L306.71,450.63L307.08,449.4L306.42,448.76L304.96,448.88L303.07,446.76L303.83,445.99L303.77,444.69L305.5,444.24L306.19,443.72L305.23,442.68L305.48,441.65z"
      />
      <path
        id="PE"
        title="Peru"
        className={`land ${getCountryColor("pe")}`}
        d="M280.13,513.14L279.38,514.65L277.94,515.39L275.13,513.71L274.88,512.51L269.33,509.59L264.3,506.42L262.13,504.64L260.97,502.27L261.43,501.44L259.06,497.69L256.29,492.45L253.65,486.83L252.5,485.54L251.62,483.48L249.44,481.64L247.44,480.51L248.35,479.26L246.99,476.59L247.86,474.64L250.1,472.87L250.43,474.04L249.63,474.7L249.7,475.72L250.86,475.5L252,475.8L253.17,477.21L254.76,476.06L255.29,474.18L257.01,471.75L260.38,470.65L263.44,467.73L264.31,465.92L263.92,463.81L264.67,463.54L266.53,464.86L267.42,466.18L268.72,466.9L270.37,469.82L272.46,470.17L274.01,469.43L275.02,469.91L276.7,469.67L278.85,470.98L277.04,473.82L277.88,473.88L279.28,475.37L276.75,475.24L276.38,475.66L274.08,476.19L270.88,478.1L270.67,479.4L269.96,480.38L270.24,481.89L268.54,482.7L268.54,483.89L267.8,484.4L268.97,486.93L270.53,488.65L269.94,489.86L271.8,490.02L272.86,491.53L275.33,491.6L277.63,489.94L277.44,494.24L278.72,494.57L280.3,494.08L282.73,498.66L282.12,499.62L281.99,501.64L281.93,504.08L280.83,505.52L281.34,506.59L280.69,507.56L281.9,510z"
      />
      <path
        id="PY"
        title="Paraguay"
        className={`land ${getCountryColor("py")}`}
        d="M299.49,526.99L300.6,523.4L300.67,521.8L302.01,519.18L306.9,518.32L309.5,518.37L312.12,519.88L312.16,520.79L312.99,522.45L312.81,526.51L315.77,527.09L316.91,526.5L318.8,527.32L319.33,528.22L319.59,530.99L319.92,532.17L320.96,532.3L322.01,531.81L323.02,532.36L323.02,534.04L322.64,535.86L322.09,537.64L321.63,540.39L319.09,542.79L316.87,543.29L313.72,542.81L310.9,541.96L313.66,537.23L313.25,535.86L310.37,534.66L306.94,532.4L304.65,531.94z"
      />
      <path
        id="SR"
        title="Suriname"
        className={`land ${getCountryColor("sr")}`}
        d="M315.02,446.72L318.38,447.28L318.68,446.77L320.95,446.57L323.96,447.33L322.5,449.73L322.72,451.64L323.83,453.3L323.34,454.5L323.09,455.77L322.37,456.94L320.77,456.35L319.44,456.64L318.31,456.39L318.03,457.2L318.5,457.75L318.25,458.32L316.72,458.09L315.01,455.67L314.64,454.1L313.75,454.09L312.5,452.07L313.02,450.62L312.87,449.97L314.57,449.24z"
      />
      <path
        id="UY"
        title="Uruguay"
        className={`land ${getCountryColor("uy")}`}
        d="M313.68,551.79L315.5,551.45L318.31,553.95L319.35,553.86L322.24,555.94L324.44,557.76L326.06,560.01L324.82,561.58L325.6,563.48L324.39,565.6L321.22,567.48L319.15,566.8L317.63,567.17L315.04,565.71L313.14,565.82L311.43,563.95L311.65,561.79L312.26,561.05L312.23,557.75L312.98,554.38z"
      />
      <path
        id="VE"
        title="Venezuela"
        className={`land ${getCountryColor("ve")}`}
        d="M275.25,430.35L275.17,431.02L273.52,431.35L274.44,432.64L274.4,434.13L273.17,435.77L274.23,438.01L275.44,437.83L276.07,435.79L275.2,434.79L275.06,432.65L278.55,431.49L278.16,430.15L279.14,429.25L280.15,431.25L282.12,431.3L283.94,432.88L284.05,433.82L286.56,433.84L289.56,433.55L291.17,434.82L293.31,435.17L294.88,434.29L294.91,433.57L298.39,433.4L301.75,433.36L299.37,434.2L300.32,435.54L302.57,435.75L304.69,437.14L305.14,439.4L306.6,439.33L307.7,440L305.48,441.65L305.23,442.68L306.19,443.72L305.5,444.24L303.77,444.69L303.83,445.99L303.07,446.76L304.96,448.88L305.34,449.67L304.31,450.74L301.17,451.78L299.16,452.22L298.35,452.88L296.12,452.18L294.04,451.82L293.52,452.08L294.77,452.8L294.66,454.67L295.05,456.43L297.42,456.67L297.58,457.25L295.57,458.05L295.25,459.23L294.09,459.68L292.01,460.33L291.47,461.19L289.29,461.37L287.74,459.89L286.89,457.12L286.14,456.14L285.12,455.53L286.54,454.14L286.45,453.51L285.65,452.68L285.09,450.83L285.31,448.82L285.93,447.88L286.44,446.38L285.45,445.89L283.85,446.21L281.83,446.06L280.7,446.36L278.72,443.95L277.09,443.59L273.49,443.86L272.82,442.88L272.13,442.65L272.03,442.06L272.36,441.02L272.14,439.89L271.52,439.27L271.16,437.97L269.72,437.79L270.49,436.13L270.84,434.12L271.65,433.06L272.74,432.25L273.45,430.83z"
      />
    </svg>
  );
}

export default SouthAmericaMap;
