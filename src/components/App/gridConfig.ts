import { DataTypes } from '../../const/dataTypes'

export const gridConfig = {
    defaultSortingField: 'id',
    columns: [
        {
            name: 'ID',
            source: 'id',
            type: DataTypes.id,
            width: 70
        },
        {
            name: 'Rank',
            source: 'rank',
            type: DataTypes.number,
            width: 70
        },
        {
            name: 'Name',
            source: 'name',
            type: DataTypes.string
        },
        {
            name: 'Github',
            source: 'githubId',
            type: DataTypes.string
        },
        {
            name: 'Score',
            source: 'totalScore',
            type: DataTypes.number
        },
        {
            name: 'Change Date',
            source: 'totalScoreChangeDate',
            type: DataTypes.datetime
        },
        {
            name: 'Location',
            source: 'locationName',
            type: DataTypes.string
        },
        {
            name: 'Active',
            source: 'isActive',
            type: DataTypes.boolean
        }
    ]
}
