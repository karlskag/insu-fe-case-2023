import styles from '../insuranceDetails.module.css';
import {
  Button, Color,
  HeadlineEight,
  HeadlineFive,
  IconCheckMark,
  IconClose,
  ParagraphBodySmall,
} from '@insurely/ui';
import ExternalLink from '../../../components/ExternalLink';
import React, { FC, Fragment } from 'react';
import { ExpandableTableRow } from '../../../components/ExpandableTableRow/ExpandableTableRow';
import { Parameter } from '../../../types/insurance';
import { useFormatMessage } from '../../../hooks/useFormatMessage';

interface ParameterDetailsProps {
  termsUrl?: string;
  parameters: Parameter[];
}

export const ParameterDetails: FC<ParameterDetailsProps> = ({ parameters, termsUrl }) => {
  const formatMessage = useFormatMessage();

  const orderedGroupedParameters = parameters.reduce((acc, param) => {
    acc[param.parameterGroupOrder] = acc[param.parameterGroupOrder] ?? [];
    acc[param.parameterGroupOrder]?.push(param);
    return acc;
  }, Object.create(null)) as Record<number, Parameter[]>;

  return (
    <section className={styles.insuranceParameters}>
      <div className={styles.parametersHeading}>
        <div>
          <HeadlineFive>{formatMessage('Extent')}</HeadlineFive>
          {termsUrl && (
            <ExternalLink url={termsUrl} text={formatMessage('Complete insurance terms')} />
          )}
        </div>
        <div>
          <Button variant="secondary" size="small" onClick={() => {}}>
            {formatMessage('Compare')}
          </Button>
        </div>
      </div>
      <table>
        {Object.values(orderedGroupedParameters).map((parameterGroup, index) => (
          <Fragment key={index}>
            <thead>
              <tr>
                <th className={styles.tableHead}>
                  <HeadlineEight margin="top">{parameterGroup[0].parameterGroup}</HeadlineEight>
                </th>
              </tr>
            </thead>
            <tbody>
              {parameterGroup.map((parameter, index) => (
                // Could extend props to allow for Icon & IconPosition overrides
                <ExpandableTableRow
                  tdStyle={{
                    margin: 0,
                    padding: '10px 0px',
                    borderBottom: '0.5px solid var(--grey02)',
                  }}
                  key={index}
                  row={{
                    id: index + '',
                    values: {
                      title: (
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                          {parameter.value === 'true' ? (
                            <IconCheckMark width={24} color={Color.green} style={{ flexShrink: 0 }} />
                          ) : (
                            <IconClose width={24} color={Color.red01} style={{ flexShrink: 0 }} />
                          )}
                          <span style={{ marginLeft: 5 }}>{parameter.parameterDisplayName}</span>
                        </div>
                      ),
                      content: (
                        <ParagraphBodySmall margin="top bottom">
                          {parameter.parameterDescription}
                        </ParagraphBodySmall>
                      ),
                    },
                  }}
                />
              ))}
            </tbody>
          </Fragment>
        ))}
      </table>
    </section>
  );
};
