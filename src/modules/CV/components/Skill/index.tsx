import React from 'react';
import {useSelector} from 'react-redux';
import {Chip, makeStyles} from '@material-ui/core';
import {getCurrentDesignSchemeId} from '../../../App/reducers';
import reactIcon from './icons/react.png';
import angularIcon from './icons/angular.png';
import javascriptIcon from './icons/js.png';
import typescriptIcon from './icons/ts.png';
import cssIcon from './icons/css.png';
import javaEeIcon from './icons/java-ee.png';
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
import jakartaEeIcon from './icons/jakarta-ee.png';
import dockerIcon from './icons/docker.png';
import gitlabCiCdIcon from './icons/gitlab.png';
import quarkusIcon from './icons/quarkus.png';
import styles from './styles';

const useStyles = makeStyles(styles);

type SkillObjectType = {
  label: string;
  logo: string;
};

export const getSkill = (type: SkillType): SkillObjectType => {
  switch (type) {
    case 'react':
      return {label: 'React', logo: reactIcon};
    case 'angular':
      return {label: 'Angular', logo: angularIcon};
    case 'js':
    case 'javascript':
      return {label: 'Javascript', logo: javascriptIcon};
    case 'ts':
    case 'typescript':
      return {label: 'TypeScript', logo: typescriptIcon};
    case 'css':
      return {label: 'CSS', logo: cssIcon};
    case 'java-ee':
      return {label: 'Java EE', logo: javaEeIcon};
    case 'java':
      return {label: 'Java', logo: javaIcon};
    case 'jakarta':
      return {label: 'Jakarta EE', logo: jakartaEeIcon};
    case 'mui':
    case 'material-ui':
      return {label: 'MUI', logo: muiIcon};
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
    case 'docker':
      return {label: 'Docker', logo: dockerIcon};
    case 'gitlab':
      return {label: 'Gitlab CI/CD', logo: gitlabCiCdIcon};
    case 'quarkus':
      return {label: 'Quarkus', logo: quarkusIcon};
    default:
      throw new Error('Invalid skill type');
  }
};

export type SkillType =
  | 'react'
  | 'angular'
  | 'js'
  | 'javascript'
  | 'ts'
  | 'typescript'
  | 'css'
  | 'java'
  | 'java-ee'
  | 'jakarta'
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
  | 'spring-boot'
  | 'docker'
  | 'gitlab'
  | 'quarkus';

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
  chip?: boolean;
};

export const Skill = ({
  type,
  showLabel = true,
  labelPlacement = 'left',
  classes,
  className,
  chip
}: SkillProps): React.ReactElement => {
  const ownClasses = useStyles();
  const currentDesignSchemeId = useSelector(getCurrentDesignSchemeId);

  const {label, logo} = getSkill(type);

  const rootClassName = `${ownClasses.root} ${className ? className : ''} ${
    classes && Object.prototype.hasOwnProperty.call(classes, 'root')
      ? classes.root
      : ''
  }`;
  const icon = (
    <div
      className={`${ownClasses.logo} ${chip && ownClasses.chipIcon} ${
        classes && Object.prototype.hasOwnProperty.call(classes, 'icon')
          ? classes.icon
          : ''
      }`}
      style={{
        backgroundImage: `url(${logo})`
      }}
    />
  );

  if (chip)
    return (
      <Chip
        className={rootClassName}
        color={
          'secondary'
          // currentDesignSchemeId === DESIGN_SCHEME_ID_RETRO
          //   ? 'secondary'
          //   : 'primary'
        }
        label={label}
        icon={icon}
      />
    );

  return (
    <div
      className={rootClassName}
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
      {icon}
      {(labelPlacement === 'right' || labelPlacement === 'bottom') &&
        showLabel && <>&nbsp;{label}</>}
    </div>
  );
};

export default Skill;
