import React from 'react';
import {makeStyles} from '@material-ui/core';
import styles from './styles';
import reactIcon from './icons/react.png';
import javascriptIcon from './icons/js.png';
import typescriptIcon from './icons/ts.png';
import cssIcon from './icons/css.png';
import javaIcon from './icons/java.png';
import muiIcon from './icons/mui.png';
import mysqlIcon from './icons/mysql.png';
import phpIcon from './icons/php.png';
import reduxIcon from './icons/redux.png';
import reduxSagaIcon from './icons/saga.png';
import typo3Icon from './icons/typo3.png';
import wordpressIcon from './icons/wordpress.png';
import webpackIcon from './icons/webpack.png';
import springBootIcon from './icons/spring.png';

const useStyles = makeStyles(styles);

type SkillObjectType = {
  label: string;
  logo: string;
};

export const getSkill = (type: SkillType): SkillObjectType => {
  switch (type) {
    case 'react':
      return {label: 'React', logo: reactIcon};
    case 'js':
    case 'javascript':
      return {label: 'Javascript', logo: javascriptIcon};
    case 'ts':
    case 'typescript':
      return {label: 'TypeScript', logo: typescriptIcon};
    case 'css':
      return {label: 'CSS', logo: cssIcon};
    case 'java':
      return {label: 'Java EE', logo: javaIcon};
    case 'mui':
    case 'material-ui':
      return {label: 'React Material UI', logo: muiIcon};
    case 'mysql':
    case 'sql':
      return {label: 'MySQL', logo: mysqlIcon};
    case 'php':
      return {label: 'PHP', logo: phpIcon};
    case 'redux':
      return {label: 'Redux', logo: reduxIcon};
    case 'redux-saga':
      return {label: 'Redux-Saga', logo: reduxSagaIcon};
    case 'typo3':
      return {label: 'TYPO3', logo: typo3Icon};
    case 'webpack':
      return {label: 'Webpack', logo: webpackIcon};
    case 'wordpress':
      return {label: 'WordPress', logo: wordpressIcon};
    case 'spring-boot':
      return {label: 'Spring Boot', logo: springBootIcon};
    default:
      throw new Error('Invalid skill type');
  }
};

export type SkillType =
  | 'react'
  | 'js'
  | 'javascript'
  | 'ts'
  | 'typescript'
  | 'css'
  | 'java'
  | 'mui'
  | 'material-ui'
  | 'mysql'
  | 'sql'
  | 'php'
  | 'redux'
  | 'redux-saga'
  | 'typo3'
  | 'wordpress'
  | 'webpack'
  | 'spring-boot';

type ClassesTypes = {
  root?: string;
  icon?: string;
};
type SkillProps = {
  showLabel?: boolean;
  labelPlacement?: 'top' | 'right' | 'bottom' | 'left';
  labelBefore?: boolean;
  classes?: ClassesTypes;
  className?: string;
  type: SkillType;
};

export const Skill = ({
  type,
  showLabel = true,
  labelPlacement = 'left',
  classes,
  className
}: SkillProps): React.ReactElement => {
  const ownClasses = useStyles();
  const {label, logo} = getSkill(type);

  return (
    <div
      className={`${ownClasses.root} ${className ? className : ''} ${
        classes && Object.prototype.hasOwnProperty.call(classes, 'root')
          ? classes.root
          : ''
      }`}
      style={{
        flexDirection:
          labelPlacement === 'left' || labelPlacement === 'right'
            ? 'row'
            : 'column'
      }}
    >
      {(labelPlacement === 'left' || labelPlacement === 'top') && showLabel && (
        <>{label}&nbsp;</>
      )}
      <div
        className={`${ownClasses.logo} ${
          classes && Object.prototype.hasOwnProperty.call(classes, 'icon')
            ? classes.icon
            : ''
        }`}
        style={{
          backgroundImage: `url(${logo})`
        }}
      />
      {(labelPlacement === 'right' || labelPlacement === 'bottom') &&
        showLabel && <>&nbsp;{label}</>}
    </div>
  );
};

export default Skill;
