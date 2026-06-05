import { QSON, Operation, RefInfo } from "./QSON"

type FilterQSOsWithSectionRefsParams = {
  qsos: QSON[]
  operation: Operation
  withEvents?: boolean
  withDeleted?: boolean
  withSectionRefs?: RefInfo[]
  filter?: (params: FilterFunctionParams) => boolean
}

type FilterFunctionParams = {
  qso: QSON
  sectionRefs?: RefInfo[]
  sectionGrid?: string
}

export function filterQSOsWithSectionRefs(params: FilterQSOsWithSectionRefsParams): QSON[] {
  const { 
    qsos, operation, 
    withEvents = false, 
    withDeleted = false, 
    withSectionRefs, 
    filter 
  } = params

  let sectionRefs = operation?.refs ?? []
  let sectionGrid = operation?.grid ?? undefined
  const actualSectionRefs = (withSectionRefs ?? []).filter(ref => ref?.type && ref?.ref)
  let sectionIncludesRefs = actualSectionRefs.length === 0 || actualSectionRefs.every(
    ref => sectionRefs.find(
      sectionRef => sectionRef.type === ref.type && sectionRef.ref === ref.ref
    )
  )

  return qsos.filter(qso => {
    if (!qso.deleted && (qso.event?.event === 'break' || qso.event?.event === 'start')) {
      sectionRefs = qso.event.operation?.refs ?? []
      sectionGrid = qso.event.operation?.grid ?? undefined
      sectionIncludesRefs = actualSectionRefs.length === 0 || actualSectionRefs.every(
        ref => sectionRefs.find(
          sectionRef => sectionRef.type === ref.type && sectionRef.ref === ref.ref
        )
      )
    }

    if (!withEvents && qso.event) return false

    if (!withDeleted && qso.deleted) return false

    if (withSectionRefs && !sectionIncludesRefs) return false

    return filter?.({ qso, sectionRefs, sectionGrid }) ?? true
  })
}

type FilterNearDupesParams = FilterQSOsWithSectionRefsParams & {
  qso: QSON
}
/**
 * Returns QSOs that happened before `qso`
 * that happened on a section that includes the given `sectionRefs`
 * and that also passes the given `filter` function
 */
export function filterNearDupes(params: FilterNearDupesParams): QSON[] {
  const { qso, filter, ...rest } = params
  const { uuid, startAtMillis, their } = qso
  const { call } = their

  const actualFilter = (params: FilterFunctionParams) => {
    const { qso: q, sectionRefs, sectionGrid } = params
    const result = (startAtMillis && q.startAtMillis ? q.startAtMillis < startAtMillis : true)
      && !q.deleted && !q.event
      && call === q.their.call
      && uuid !== q.uuid
      && (filter ? filter({ qso: q, sectionRefs, sectionGrid }) : true)
    return result
  }

  return filterQSOsWithSectionRefs({ ...rest, filter: actualFilter })
}

