// styles
import { classNames } from 'shared/lib/UtilityMethods'
import { Button, ButtonThemeEnum } from 'shared/ui/Button'
import classes from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
   className?: string
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className }) => {
   const { i18n } = useTranslation()

   const changeLanguage = () => {
      i18n.changeLanguage(i18n.language === 'cz' ? 'en' : 'cz')
   }

   return (
      <Button 
         theme={ButtonThemeEnum.CLEAR}
         className={classNames(classes.languageSwitcher, {}, [className])} 
         onClick={ changeLanguage } 
         >
         {i18n.language === 'cz' ? ' 🇺🇸' : '🇨🇿'}
      </Button>
   )
}