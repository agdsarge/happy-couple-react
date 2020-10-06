const styleMap = (styleType, theme) => {
    switch(styleType){
        case "lightOnDark":
            return {backgroundColor: `#${theme.light_accent}`,
                    color: `#${theme.dark_accent}`}
        case "darkOnLight":
            return {backgroundColor: `#${theme.dark_accent}`,
                    color: `#${theme.light_accent}`}
        case "primary":
            return {backgroundColor: `#${theme.light_accent}`,
                    color: `#${theme.main_color}`,
                    fontSize: '4rem'}
        default: 
            return {}
    }
} 

export default styleMap;